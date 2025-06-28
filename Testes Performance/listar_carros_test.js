import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '10s',
};

const TOKEN = 'coloca o token aqui'; 

export default function () {
  const url = 'https://suaapi.com/api/carros';
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const res = http.get(url, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém lista de carros': (r) => r.json().length > 0,
  });

  sleep(1);
}
