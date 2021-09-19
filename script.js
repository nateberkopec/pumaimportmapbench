import http from 'k6/http';
export let options = {
  discardResponseBodies: false,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 6,
      iterations: 1,
      maxDuration: '1h30m',
    },
  },
};

export default function () {
  for (let step = 1; step <= 25; step++) {
    http.get('https://localhost:9292/js/example_1.js');
  }
}