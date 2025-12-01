# Projeto Função Serverless Node.js

Este projeto implementa uma função serverless simples em Node.js para retornar uma mensagem de saudação personalizada.

---

## Estrutura do projeto

```

function-nodejs/
└── api/
└── ola.js

````

---

## Conteúdo do arquivo `api/ola.js`

```js
export default function handler(req, res) {
  const name = req.query.name || 'mundo';
  res.status(200).json({ message: `Olá, ${name}!` });
}
````

---

## Como usar

### Opção 1: Subir pelo site Vercel

1. Crie uma conta grátis em [vercel.com](https://vercel.com/).
2. Crie um novo projeto e importe este repositório (se estiver no GitHub) ou crie o arquivo `api/ola.js` diretamente pelo editor online.
3. Faça o deploy automático.
4. Acesse a URL pública:
   `https://function-nodejs-vercel.vercel.app/api/ola?name=Professor`
   para ver a mensagem personalizada.

---

## Detalhes

* Linguagem: JavaScript (Node.js)
* Tipo: Função serverless simples
* Funcionalidade: Recebe parâmetro `name` e retorna mensagem personalizada JSON
