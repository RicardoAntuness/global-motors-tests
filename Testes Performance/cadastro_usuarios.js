import http from 'k6/http';
import { check, sleep } from 'k6';

const usuarios = Array.from({ length: 50 }, (_, i) => ({
  nome: `Lendaria${i + 1}`,
  email: `Tupanci${i + 1}@teste.com`,
  senha: `senha${i + 1}`
}));

export const options = {
  vus: 1,
  iterations: usuarios.length
};

export default function () {
  const usuario = usuarios[__ITER];

  const res = http.post('https://reqres.in/api/register', JSON.stringify(usuario), {
    headers: { 'Content-Type': 'application/json' }
  });

  check(res, {
    'status 200 ou 201': (r) => r.status === 200 || r.status === 201,
    'usuário cadastrado com sucesso': (r) => r.body.includes('sucesso') || r.status === 201,
  });

  sleep(0.5);
}
