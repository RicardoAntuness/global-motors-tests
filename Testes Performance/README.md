# ⚡ Testes de Performance com k6 - App de Venda de Carros

Este readme contém dois testes de carga escritos com k6, uma ferramenta open-source de performance testing. Os testes simulam cenários reais de uso da API REST do aplicativo de venda de carros.

---

## Conteúdo

- `login_test.js` - Testa o endpoint de autenticação (`/api/auth/login`)
- `listar_carros_test.js` - Testa o endpoint de catálogo de carros (`/api/carros`)

---

## Descrição dos Testes

###  Teste 1: Login com dados válidos

- **Arquivo:** `login_test.js`
- **Objetivo:** Verificar se o endpoint de login responde corretamente e de forma rápida sob carga.
- **Usuários simultâneos:** 10
- **Duração:** 10 segundos

#### Validações:
- Status da resposta é `200`
- Resposta contém o token JWT (`token` no corpo JSON)

#### Fluxo:
1. Envia uma requisição POST para `/api/auth/login`
2. Envia credenciais válidas (email e senha)
3. Verifica resposta

---

### Teste 2: Listagem de carros

- **Arquivo:** `listar_carros_test.js`
- **Objetivo:** Verificar o tempo de resposta e estabilidade do endpoint de listagem de veículos com múltiplos acessos simultâneos.
- **Usuários simultâneos:** 20
- **Duração:** 10 segundos

#### Validações:
- Status da resposta é `200`
- Resposta contém um array com ao menos um carro

#### Fluxo:
1. Envia uma requisição GET para `/api/carros`
2. Passa o token JWT no header Authorization
3. Verifica se a resposta está correta

