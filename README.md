# Projeto de Prática Profissional em ADS
Título do projeto: Aplicativo de Pedidos para Restaurante

## Descrição
Aplicação web para gerenciamento de cardápio e pedidos de restaurante.  
- Backend: Node.js com banco SQLite.  
- Frontend: HTML, CSS, JavaScript.  
- Funcionalidades principais:
  - Cadastro de itens no cardápio.
  - Visualização e atualização do cardápio.
  - Registro e finalização de pedidos.
  - Relatórios de pedidos finalizados.

---

## Estrutura do Projeto
/Backend

├─ src/

├─ db.sqlite

├─ index.js

└─ schema.sql

/Frontend

├─ cadastro.html

├─ cardapio.html

├─ gerente.html

└─ index.html

/node_modules

package-lock.json

package.json

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior).
- npm (gerenciador de pacotes do Node.js).
- Git (opcional, para clonar o repositório).

---

## Passo 1: Clonar o Repositório

```bash
git clone https://github.com/davila-ravena/ppads-project.git
cd ppads-project

Para usar a Iteração 2 diretamente:
git checkout tags/v2

```
## Passo 2: Instalar Dependências
No terminal, dentro da pasta do projeto:
```bash
npm install
```
Isso irá instalar todas as dependências listadas no package.json.

## Passo 3: Inicializar o Banco de Dados
O projeto utiliza SQLite. Para criar as tabelas iniciais:
1. Abra o terminal dentro da pasta /Backend.
2. Execute o script SQL:
```bash
sqlite3 db.sqlite < schema.sql
```
Isso cria a estrutura inicial do banco.

## Passo 4: Executar o Backend
Ainda na pasta /Backend, execute:
```bash
node index.js
```
O servidor deve iniciar, geralmente em http://localhost:3000 (ou porta definida no index.js).

## Passo 5: Abrir o Frontend
No navegador, abra os arquivos HTML diretamente:
- Frontend/index.html → Tela de login.
- Frontend/cadastro.html → Cadastro de itens.
- Frontend/cardapio.html → Visualização do cardápio.
- Frontend/gerente.html → Área do gerente e relatórios.
Dica: Alguns navegadores podem bloquear chamadas a localStorage ou fetch de arquivos locais; se necessário, use uma extensão para rodar arquivos HTML localmente ou um servidor local (ex.: Live Server do VS Code).

---

## 6. Usuários de Demonstração (Ambiente de Teste)
A aplicação simula autenticação de usuários para fins de testes.

👨‍🍳 Cliente

Email: cliente@teste.com

Senha: 1234

🧑‍🏫 Gerente

Email: gerente@teste.com

Senha: 1234

💡 Cenários de erro

Email válido + senha incorreta → exibe "Senha incorreta"

Email não cadastrado → exibe "Usuário não encontrado"

Campos vazios → exibe "Preencha todos os campos"

---

## Contato
Em caso de dúvidas, contate a equipe de desenvolvimento:
-	Dávila Ravena Silva Dorta.
-	Johnny Kevin Teodoro Costa.
- Email: 10424743@mackenzista.com.br


