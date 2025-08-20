# e-comm-movies 🎬🛒

Projeto desenvolvido como desafio técnico para criação de um e-commerce de filmes utilizando **React**, **Next.js**, **TypeScript** e **Tailwind CSS**.

## Desafio 💡

O objetivo é criar um fluxo de compra simples com três telas principais:

- **Home 🏠:** Lista de filmes obtida via API, permitindo adicionar ao carrinho.
- **Carrinho 🛒:** Exibe itens adicionados, permite remoção e mostra o valor total. Exibe estado vazio se não houver itens.
- **Compra Realizada ✅:** Tela de confirmação após finalizar a compra, com opção de voltar à Home.

---

## Arquitetura do Projeto 🏗️

O projeto segue uma arquitetura modular, separando responsabilidades por domínio:

```
src/
  assets/           # Imagens e estilos globais 🖼️
  modules/          # Módulos de domínio (cart, complete, home) 📦
  pages/            # Páginas Next.js (roteamento) 📄
  share/            # Componentes, serviços e tipos compartilhados ♻️
  utils/            # Funções utilitárias 🛠️
public/             # Assets públicos (favicons, imagens) 🌐
```

- **Componentização:** Componentes reutilizáveis em `share/components` 🧩
- **Gerenciamento de estado:** Zustand em `share/store` 🗃️
- **Estilização:** Tailwind CSS (pode ser adaptado para styled-components) 🎨

---

## Instalação ⚙️

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/e-comm-movies.git
   cd e-comm-movies
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```sh
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse:**  
   [http://localhost:3000](http://localhost:3000) 🌍

---

## Variáveis de Ambiente 🌱

O projeto utiliza uma variável de ambiente para definir a URL base da API:

```env
BASE_URL=https://wefit-movies.vercel.app
```

Para rodar localmente, crie um arquivo `.env` na raiz do projeto com o conteúdo acima.  
A API é pública, então não é necessário adicionar chaves ou tokens.

---

## Tecnologias Utilizadas 🛠️

- [Next.js 14](https://nextjs.org/) ⚡
- [React 18](https://react.dev/) ⚛️
- [TypeScript](https://www.typescriptlang.org/) 🟦
- [Zustand](https://github.com/pmndrs/zustand) 🐻
- [Tailwind CSS](https://tailwindcss.com/) 💨
- [Axios](https://axios-http.com/) 🔗

---

## Avaliação 📝

- Fidelidade ao layout do Figma 🎨
- Funcionamento sem bugs 🐞
- Organização e clareza do código 📚
- Componentização e reutilização 🧩
- Boas práticas de TypeScript e estilização ✅

---

## Deploy 🚀

Projeto pode ser acessado aqui: [Vercel](https://e-comm-movies.vercel.app/) 🌐
