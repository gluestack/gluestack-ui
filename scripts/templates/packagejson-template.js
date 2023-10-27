module.exports = () => {
  return `{
    "name": "@gluestack-ui/{**PACKAGE_NAME**}",
    "version": "0.1.0",
    "main": "lib/commonjs/index",
    "module": "lib/module/index",
    "types": "lib/typescript/index.d.ts",
    "react-native": "src/index",
    "source": "src/index",
    "typings": "lib/typescript/index.d.ts",
    "scripts": {
      "prepare": "bob build",
      "build": "bob build",
      "clean": "rm -rf lib"
    },
    "devDependencies": {
      "@types/react": "^18.0.22",
      "@types/react-native": "^0.72.3",
      "babel-plugin-transform-remove-console": "^6.9.4",
      "react": "^18.1.0",
      "react-dom": "^18.1.0",
      "react-native": "^0.72.4",
      "react-native-builder-bob": "^0.20.1",
      "react-native-web": "^0.19.9",
      "tsconfig": "7",
      "typescript": "^4.9.4"
    },
    "dependencies": {
      "@react-native-aria/focus": "^0.2.7",
      "react-native-svg": "13.4.0"
    },
    "peerDependencies": {
      "react": ">=16",
      "react-dom": ">=16"
    },
    "react-native-builder-bob": {
      "source": "src",
      "output": "lib",
      "targets": [
        "commonjs",
        [
          "module"
        ],
        "typescript"
      ]
    },
    "files": [
      "lib/",
      "src/"
    ]
  }
  `;
};
