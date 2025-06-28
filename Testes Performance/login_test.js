import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const url = 'https://suaapi.com/api/auth/login';
  const payload = JSON.stringify({
    email: 'tupanci@email.com',
    senha: 'TupanciRS123'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém token': (r) => r.json('token') !== undefined,
  });

  sleep(1);
}
