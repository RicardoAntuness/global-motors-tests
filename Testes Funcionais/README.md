# Testes Funcionais - App de Venda de Carros

### Este documento descreve os testes para as principais funcionalidades do aplicativo de venda de carros.

---

## 1. AUTENTICAÇÃO (LOGIN/REGISTRO)

### Teste 1.1 - Registro de novo usuário
**Objetivo:** Verificar se é possível criar uma nova conta.  
**Resultado Esperado:** Conta criada com sucesso e redirecionamento para a tela inicial.

### Teste 1.2 - Login com dados válidos  
**Objetivo:** Garantir que usuários cadastrados consigam fazer login.  
**Resultado Esperado:** Login realizado com sucesso e redirecionamento.

### Teste 1.3 - Login com dados inválidos  
**Objetivo:** Impedir acesso com credenciais incorretas.  
**Resultado Esperado:** Mensagem de erro e bloqueio de acesso.

---

## 2. CATÁLOGO DE CARROS

### Teste 2.1 - Visualizar lista de carros disponíveis  
**Objetivo:** Verificar se os carros estão sendo listados corretamente.  
**Resultado Esperado:** Lista exibindo imagem, nome, preço e botão de detalhes para cada carro.

### Teste 2.2 - Buscar carro pelo nome ou modelo  
**Objetivo:** Validar o funcionamento do filtro de busca.  
**Resultado Esperado:** Lista filtrada com resultados corretos.

---

## 3. DETALHES DO CARRO

### Teste 3.1 - Visualizar detalhes do carro  
**Objetivo:** Verificar se as informações do carro selecionado são exibidas corretamente.  
**Resultado Esperado:** Tela com foto, descrição, preço e demais informações do carro.

---

## 4. CARRINHO DE COMPRAS

### Teste 4.1 - Adicionar carro ao carrinho  
**Objetivo:** Validar a funcionalidade de adicionar itens ao carrinho.  
**Resultado Esperado:** Feedback visual e item adicionado corretamente.

### Teste 4.2 - Remover item do carrinho  
**Objetivo:** Verificar a remoção de carros do carrinho.  
**Resultado Esperado:** Carrinho atualizado com item removido.

### Teste 4.3 - Visualizar carrinho com resumo  
**Objetivo:** Exibir os carros adicionados, preço total e opções de compra.  
**Resultado Esperado:** Informações corretas e interface amigável.

---

## 5. FINALIZAR COMPRA

### Teste 5.1 - Realizar compra com sucesso  
**Objetivo:** Verificar o fluxo completo de compra.  
**Resultado Esperado:** Compra concluída e carrinho limpo.

---

#  Testes em Postman:

##  Teste 1 - Login com Dados Válidos

- **ID:** CT001  
- **Objetivo:** Validar que o login funciona corretamente com credenciais válidas.  
- **Pré-condição:** Usuário já registrado.  
- **Passos:**
  1. Acessar a tela de login.
  2. Informar e-mail e senha corretos.
  3. Clicar em "Entrar".
- **Resultado Esperado:** Usuário autenticado com sucesso e redirecionado para a tela principal.
---

##  Teste 2 - Visualizar Lista de Carros

- **ID:** CT002  
- **Objetivo:** Garantir que o catálogo exiba corretamente os carros cadastrados.  
- **Pré-condição:** Existência de carros no banco de dados.  
- **Passos:**
  1. Acessar a tela inicial do aplicativo.
- **Resultado Esperado:** Lista com imagem, nome, modelo, preço e botão de detalhes para cada carro.
---

##  Teste 3 - Adicionar Carro ao Carrinho

- **ID:** CT003  
- **Objetivo:** Validar que um carro pode ser adicionado ao carrinho corretamente.  
- **Pré-condição:** Usuário logado e carro disponível.  
- **Passos:**
  1. Na lista de carros, clicar em "Adicionar ao Carrinho".
  2. Acessar o carrinho.
- **Resultado Esperado:** Item aparece no carrinho com valor correto.
---

##  Teste 4 - Finalizar Compra com Sucesso

- **ID:** CT004  
- **Objetivo:** Validar o processo de checkout e finalização da compra.  
- **Pré-condição:** Carrinho com itens válidos.  
- **Passos:**
  1. Acessar o carrinho.
  2. Clicar em "Finalizar Compra".
  3. Informar dados válidos de pagamento.
- **Resultado Esperado:** Compra finalizada com sucesso e carrinho esvaziado.




## Resultado dos Testes Funcionais(Manuais):
### Teste 1.1 - Registro de novo usuário
### Teste 1.2 - Login com dados válidos  
### Teste 1.3 - Login com dados inválidos  
### Teste 2.1 - Visualizar lista de carros disponíveis  
### Teste 2.2 - Buscar carro pelo nome ou modelo  
### Teste 3.1 - Visualizar detalhes do carro  
### Teste 4.1 - Adicionar carro ao carrinho  
### Teste 4.2 - Remover item do carrinho  
### Teste 4.3 - Visualizar carrinho com resumo  
### Teste 5.1 - Realizar compra com sucesso  

---

## Resultado dos Testes Funcionais(Postman):
###  Teste 1 - Login com Dados Válidos
###  Teste 2 - Visualizar Lista de Carros
###  Teste 3 - Adicionar Carro ao Carrinho
###  Teste 4 - Finalizar Compra com Sucesso

---