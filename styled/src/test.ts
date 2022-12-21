write a function that generates StateIds from the sample object 





const styleList = [
  {
      "original": {
          "bg": "red",
          "p": "$3"
      },
      "resolved": {
          "backgroundColor": "red",
          "padding": 12
      },
      "meta": {
          "path": [
              "baseStyle"
          ],
          "weight": 1,
          "cssId": "cssinjected-55285265",
          "cssRuleset": "[data-style~=\"cssinjected-55285265\"] {background-color:rgba(255,0,0,1.00) !important;padding:12px !important;}"
      }
  },
  {
      "original": {
          "bg": "$green500"
      },
      "resolved": {
          "backgroundColor": "#22c55e"
      },
      "meta": {
          "path": [
              "variants",
              "greenBox"
          ],
          "weight": 2,
          "cssId": "cssinjected-19896534",
          "cssRuleset": "[data-style~=\"cssinjected-19896534\"] {background-color:rgba(34,197,94,1.00) !important;}"
      }
  },
  {
      "original": {
          "bg": "$yellow500"
      },
      "resolved": {
          "backgroundColor": "#eab308"
      },
      "meta": {
          "path": [
              "variants",
              "blueBox"
          ],
          "weight": 2,
          "cssId": "cssinjected-49e08c00",
          "cssRuleset": "[data-style~=\"cssinjected-49e08c00\"] {background-color:rgba(234,179,8,1.00) !important;}"
      }
  },
  {
      "original": {
          "p": "$10"
      },
      "resolved": {
          "padding": 40
      },
      "meta": {
          "path": [
              "sizes",
              "small"
          ],
          "weight": 2,
          "cssId": "cssinjected-ad2bbad3",
          "cssRuleset": "[data-style~=\"cssinjected-ad2bbad3\"] {padding:40px !important;}"
      }
  },
  {
      "original": {
          "px": "$20",
          "py": "$10"
      },
      "resolved": {
          "paddingHorizontal": 80,
          "paddingVertical": 40
      },
      "meta": {
          "path": [
              "sizes",
              "large"
          ],
          "weight": 2,
          "cssId": "cssinjected-4c7a35e5",
          "cssRuleset": "[data-style~=\"cssinjected-4c7a35e5\"] {padding-bottom:40px !important;padding-left:80px !important;padding-right:80px !important;padding-top:40px !important;}"
      }
  },
  {
      "original": {
          "bg": "aqua"
      },
      "resolved": {
          "backgroundColor": "aqua"
      },
      "meta": {
          "path": [
              "baseStyle",
              "colorMode",
              "dark"
          ],
          "weight": 3,
          "colorMode": "dark",
          "cssId": "cssinjected-30c40fb0",
          "cssRuleset": "@media (prefers-color-scheme: dark) {[data-style~=\"cssinjected-30c40fb0\"] {background-color:rgba(0,255,255,1.00) !important;}}"
      }
  },
  {
      "original": {
          "bg": "yellow"
      },
      "resolved": {
          "backgroundColor": "yellow"
      },
      "meta": {
          "path": [
              "baseStyle",
              "state",
              "hover"
          ],
          "weight": 3,
          "cssId": "cssinjected-f591f330",
          "cssRuleset": "[data-style~=\"cssinjected-f591f330\"] {background-color:rgba(255,255,0,1.00) !important;}"
      }
  },
  {
      "original": {
          "bg": "purple"
      },
      "resolved": {
          "backgroundColor": "purple"
      },
      "meta": {
          "path": [
              "baseStyle",
              "state",
              "active"
          ],
          "weight": 3,
          "cssId": "cssinjected-bdedfe03",
          "cssRuleset": "[data-style~=\"cssinjected-bdedfe03\"] {background-color:rgba(128,0,128,1.00) !important;}"
      }
  },
  {
      "original": {
          "color": "white"
      },
      "resolved": {
          "color": "white"
      },
      "meta": {
          "path": [
              "baseStyle",
              "descendants",
              "_text"
          ],
          "weight": 3,
          "cssId": "cssinjected-9dfd81ce",
          "cssRuleset": "[data-style~=\"cssinjected-9dfd81ce\"] {color:rgba(255,255,255,1.00) !important;}"
      }
  },
  {
      "original": {
          "bg": "blue"
      },
      "resolved": {
          "backgroundColor": "blue"
      },
      "meta": {
          "path": [
              "baseStyle",
              "queries",
              0,
              "$md"
          ],
          "weight": 4,
          "queryCondition": "@media screen and (min-width: 768px)",
          "cssId": "cssinjected-897a8d3d",
          "cssRuleset": "@media screen and (min-width: 768px) {[data-style~=\"cssinjected-897a8d3d\"] {background-color:rgba(0,0,255,1.00) !important;}}"
      }
  }
]


function generateStyleIdsFromStyleList(styleList: Array<any>): StyleIds {
  // return cssId based on meta.path 
}

type IDs = Array<string>;
type DefaultAndState = {
  default: IDs;
  state: {
    [key: string]: IDs;
  };
};

type StyleIds = {
  defaultAndState: DefaultAndState;
  variants: {
    [key: string]: DefaultAndState;
  };
  sizes: {
    [key: string]: DefaultAndState;
  };
};
