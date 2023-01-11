// SX
//   style
//   queries
//   colorMode
//   state
//   descendants

//   baseStyle: SX
//   variants: Map<key, SX>
//   sizes:  Map<key, SX>

//   baseStyle: {
//     style: {
//       bg: 'red'
//     },

//     colorMode: {
//       dark: {
//         style: 'blue'
//       }
//     },

//      queries: [{
//           condition: '$md',
//           value: {
//             style: {
//               bg: 'blue',
//             },
//             state: {
//               hover: {
//                 style: {
//                   bg: '$green900',
//                 },
//                 colorMode: {
//                   dark: {
//                     style: {
//                       bg: 'purple',
//                     },
//                   },
//                   light: {
//                     style: {
//                       bg: 'aqua',
//                     },
//                   },
//                 },
//                 state: {
//                   hover: {
//                     style: {
//                       bg: '$yellow500',
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       ],
//       state: {
//         hover: {
//           style: {
//             bg: 'red',
//           },
//           // descendants: {
//           //   _text: {
//           //     style: {
//           //       color: 'white',
//           //     },
//           //   },
//           // },
//         },

//         active: {
//           style: {
//             bg: 'purple',
//           },
//         },
//       },

//   }
