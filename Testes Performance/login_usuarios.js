import http from 'k6/http';
import { check, sleep } from 'k6';

// Deve ser a mesma lista usada no cadastro
const usuarios = Array.from({ length: 30 }, (_, i) => ({
  email: `Tupanci${i + 1}@teste.com`,
  senha: `senha${i + 1}`
}));

export const options = {
  vus: 1,
  iterations: usuarios.length
};

export default function () {
  const usuario = usuarios[__ITER];

  const res = http.post('https://suaapi.com/api/auth/login', JSON.stringify(usuario), {
    headers: { 'Content-Type': 'application/json' }
  });

  check(res, {
    'status 200': (r) => r.status === 200,
    'token presente': (r) => r.json('token') !== undefined,
  });

  sleep(0.5);
}
