# Meu projeto


Perfeito, Carlos 👌. Vou te entregar uma **descrição completa do seu projeto** e um **checklist passo a passo** para você seguir com clareza até a entrega final.

---

## 📖 Descrição do Projeto

**Título:** Sistema de Reserva de Hotel (React + Node.js + MongoDB)

**Resumo:**  
O sistema é uma aplicação **single page** desenvolvida em **React** com estilização em **CSS puro**, integrada a uma **API Node.js/Express** conectada ao **MongoDB Atlas**. O deploy será feito com **frontend no Vercel** e **backend no Render**.  

**Funcionalidades principais:**
1. **Login de usuário**  
   - Autenticação simples (via API).  
   - Usuário só acessa o sistema após login.  

2. **Cadastro de cliente**  
   - Caso não esteja cadastrado, o usuário pode registrar CPF, nome, email, telefone e endereço.  
   - Dados armazenados no MongoDB.  

3. **Reserva de quarto**  
   - O cliente pode reservar apenas **um dos três quartos disponíveis**.  
   - A reserva é sempre de **24 horas**: o usuário escolhe apenas a **data de entrada**, e o sistema calcula automaticamente a **data de saída**.  
   - O sistema verifica se o quarto está livre antes de confirmar a reserva.  

4. **Gerenciamento de dados**  
   - Listagem de reservas existentes.  
   - Verificação de disponibilidade de quartos.  
   - Biblioteca de perguntas e respostas (CRUD simples).  

5. **Deploy e documentação**  
   - Frontend hospedado no **Vercel**.  
   - Backend hospedado no **Render**.  
   - Documentação em **Markdown (README.md)** com instruções de uso, rotas da API e prints da aplicação.  

---

## 📋 Checklist de Desenvolvimento

### 🔹 Etapa 1 — Planejamento (1–2 dias)
- [ ] Definir estrutura de pastas (`frontend/` e `backend/`).  
- [ ] Criar repositório no GitHub.  
- [ ] Configurar ambiente inicial (React + Node.js + MongoDB Atlas).  
- [ ] Escrever esqueleto inicial do README.md com objetivos do projeto.  

---

### 🔹 Etapa 2 — Backend (3–5 dias)
- [ ] Configurar servidor Express.  
- [ ] Conectar ao MongoDB Atlas.  
- [ ] Criar modelo de **Cliente** (CPF, nome, email, telefone, endereço).  
- [ ] Criar modelo de **Reserva** (quarto, dataEntrada, dataSaida, clienteId).  
- [ ] Implementar rotas:  
  - `POST /login`  
  - `POST /clientes` (cadastro)  
  - `POST /reservas` (criar reserva)  
  - `GET /reservas` (listar reservas)  
- [ ] Testar rotas com Postman/Insomnia.  
- [ ] Documentar rotas no README.md.  

---

### 🔹 Etapa 3 — Frontend (4–6 dias)
- [ ] Criar tela de **Login**.  
- [ ] Criar tela de **Cadastro de cliente**.  
- [ ] Criar tela de **Reserva**:  
  - Input para data de entrada.  
  - Seleção de quarto (1, 2 ou 3).  
  - Mostrar automaticamente a data de saída (entrada + 1 dia).  
- [ ] Criar tela de **Listagem de reservas**.  
- [ ] Integrar frontend com API do Render (fetch/axios).  
- [ ] Testar fluxo completo (login → cadastro → reserva).  

---

### 🔹 Etapa 4 — Estilização (2–3 dias)
- [ ] Aplicar CSS puro em todas as telas.  
- [ ] Garantir responsividade (desktop e mobile).  
- [ ] Criar estilos consistentes (cores, botões, inputs).  

---

### 🔹 Etapa 5 — Deploy (2 dias)
- [ ] Deploy do **frontend no Vercel**.  
- [ ] Deploy do **backend no Render**.  
- [ ] Configurar variáveis de ambiente (MongoDB URI, JWT secret).  
- [ ] Testar integração entre frontend e backend em produção.  

---

### 🔹 Etapa 6 — Documentação Final (2–3 dias)
- [ ] Completar README.md com:  
  - Objetivo do projeto.  
  - Tecnologias usadas.  
  - Como rodar localmente.  
  - Como acessar deploy online.  
  - Rotas da API com exemplos.  
  - Prints/GIFs da aplicação funcionando.  
- [ ] Revisar ortografia e clareza.  
- [ ] Adicionar “sugar” (formatação bonita com títulos, listas, emojis).  

---

## ⏱️ Prazo estimado
- **Mínimo:** 12–14 dias se você focar bastante.  
- **Realista para iniciante sólido:** **15–18 dias**.  
- **Com documentação caprichada:** até **20 dias**.  

---

👉 Carlos, esse checklist é seu **mapa de execução**. Se você seguir etapa por etapa, vai conseguir entregar com qualidade e dentro do prazo.  

Quer que eu já te monte um **modelo inicial de README.md em Markdown** para você começar a documentar desde o início?
