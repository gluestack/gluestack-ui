const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const traverse = require("@babel/traverse");
const generate = require("@babel/generator").default;
const t = require("@babel/types");

function getNativeBaseConfig() {
  const isNativeBaseJSExist = fs.existsSync(
    path.join(process.cwd(), "./nativebase.config.js")
  );
  const isNativeBaseTSExist = fs.existsSync(
    path.join(process.cwd(), "./nativebase.config.ts")
  );

  if (isNativeBaseTSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), "./nativebase.config.ts"),
      "utf8"
    );
  }

  if (isNativeBaseJSExist) {
    return fs.readFileSync(
      path.join(process.cwd(), "./nativebase.config.js"),
      "utf8"
    );
  }
}

const nativeBaseConfig = getNativeBaseConfig();

let config = {};
const ast = babel.parse(nativeBaseConfig);
babel.traverse(ast, {
  Program(path) {
    let nodePath;
    path.traverse({
      ExpressionStatement(path) {
        path.traverse({
          AssignmentExpression(path) {
            if (
              path.node.left.object.name === "module" &&
              path.node.left.property.name === "exports"
            ) {
              nodePath = path.node.right;
            }
          },
        });
      },
      ObjectProperty(path) {
        if (path.node.key.name) {
          path.node.key.name = `"${path.node.key.name}"`;
        }
        if (t.isNumericLiteral(path.node.key)) {
          path.node.key.value = `"${path.node.key.value}"`;
        }
      },
    });
    config = JSON.parse(generate(nodePath).code);
  },
});
// console.log(ast, "####");

module.exports = function (babel) {
  const { types: t } = babel;
  return {
    visitor: {
      Program(progPath) {
        let isStyledImportedFromNativeBase = false;
        let styledLocalCalleeName = "";
        progPath.traverse({
          ImportSpecifier(importSpecPath) {
            if (
              importSpecPath.node.imported.name === "styled" &&
              importSpecPath.parent.source.value === "@gluestack/styled"
            ) {
              isStyledImportedFromNativeBase = true;
              styledLocalCalleeName = importSpecPath.node.local.name;
            }
          },
          CallExpression(callExpPath) {
            if (
              callExpPath.node.callee.name === styledLocalCalleeName &&
              isStyledImportedFromNativeBase
            ) {
              callExpPath.traverse({
                StringLiteral(path) {
                  if (path.node.value.startsWith("$")) {
                    const parentKey = path.parent.key.name;
                    if (
                      config["aliases"][parentKey] &&
                      config["aliases"][parentKey]["scale"]
                    ) {
                      const scaleValue = config["aliases"][parentKey]["scale"];
                      const token = path.node.value.substring(1);
                      if (token.includes(".")) {
                        const [a, b] = token.split(".");
                        path.node.value =
                          config["tokens"][scaleValue]?.[a]?.[b] ??
                          path.node.value;
                      } else {
                        path.node.value =
                          config["tokens"][scaleValue]?.[token] ??
                          path.node.value;
                      }
                    }
                  }
                  if (
                    config["aliases"][path.parent.key.name] &&
                    config["aliases"][path.parent.key.name]["property"]
                  ) {
                    path.parent.key.name =
                      config["aliases"][path.parent.key.name]["property"];
                  }
                },
              });
            }
          },
        });
      },
    },
  };
};
