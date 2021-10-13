// import http from 'k6/http';
// export let options = {
//   discardResponseBodies: false,
//   scenarios: {
//     contacts: {
//       executor: 'per-vu-iterations',
//       vus: 6, // 6 connections per domain in HTTP 1
//       iterations: 1,
//       maxDuration: '1h30m',
//     },
//   },
// };

// // A little jank - is there a better way to get the URL from rails into this script?
// export default function () {
//   // The number of downloads here is based on real numbers from a 7+ year old Rails app
//   for (let step = 1; step <= 200; step++) { // 1200 total downloads of a ~30kb file.
//     http.get('http://localhost:3000/assets/es-module-shims.min-fb6f777d3001ba8b2a4d89d3b4c33deeb216fcdd610d55eb876ea72ad5ba50ef.js');
//   }
// }

// http/2 version

import http from 'k6/http';
export let options = {
  discardResponseBodies: false,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,
      maxDuration: '1h30m',
    },
  },
};

// A little jank - is there a better way to get the URL from rails into this script?
export default function () {
  // The number of downloads here is based on real numbers from a 7+ year old Rails app
  for (let step = 1; step <= 1200; step++) { // 1200 total downloads of a ~30kb file.
    http.get('https://localhost:9291/assets/es-module-shims.min-fb6f777d3001ba8b2a4d89d3b4c33deeb216fcdd610d55eb876ea72ad5ba50ef.js');
  }
}