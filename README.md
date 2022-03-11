<h1 align="center"> Kenzie Games - API </h1>

Aqui os usuários podem cadastrar os seus jogos preferidos e as plataformas que mais utilizam, dessa forma, outros usuários também poderam ver o seu perfil e interesses, assim podendo compartilhar informações e afeições em comum.

## **Endpoints**

A API possui 5 endpoints para visualização de usuário, jogos e plataformas, assim como jogos específicos de um usuário. Além disso, existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

O url base da API é https://json-server-games-final.herokuapp.com/

## **Rotas que não precisam de autenticação**

 <h2 align="center">Listando usuários</h2>
 Nessa API o usuário sem fazer login ou se cadastrar pode ver outros usuários já cadastrados na plataforma, na API podemos acessar a lista dessa forma:

`GET /users - Formato da Resposta - STATUS 200`

```json
[
  {
    "email": "josecrispim@gmail.com",
    "password": "$2a$10$zFaVPWd/3Bm9dtwNTCPez.2ECwQSHxUYTmcHUfXnht3GUqUIvU8nK",
    "id": 2
  },
  {
    "email": "irineu@gmail.com",
    "password": "$2a$10$CcHI8xFN4NIINqaXo.wUpeexifa5BgnVQPZof8Z5lHvvwMmWbvfCi",
    "id": 3
  },
  {
    "email": "kenzinhoDaKenzie@gmail.com",
    "password": "$2a$10$6kB9Cit4inBLzjNIYHJ5keQZD5rMF1WrAoQ5KnMdFhyTgdSM1W12y",
    "id": 4
  }
]
```

Podemos acessar um usário específico utilizando o endpoint:

`GET /users/:user_id - Formato da Resposta - STATUS 200`

```json
{
  "email": "josecrispim@gmail.com",
  "password": "$2a$10$zFaVPWd/3Bm9dtwNTCPez.2ECwQSHxUYTmcHUfXnht3GUqUIvU8nK",
  "id": 2
}
```

Podemos acessar todas as informações de um usário específico utilizando o endpoint:

`GET /users/:user_id/full - Formato da Resposta - STATUS 200`

```json
{
  "email": "josecrispim@gmail.com",
  "password": "$2a$10$zFaVPWd/3Bm9dtwNTCPez.2ECwQSHxUYTmcHUfXnht3GUqUIvU8nK",
  "id": 2,
  "games": [
    {
      "name": "Alien Isolation",
      "type": "Terror",
      "userId": 2,
      "id": 1
    },
    {
      "name": "Elden Ring",
      "type": "RPG",
      "userId": 2,
      "id": 2
    }
  ]
}
```

<h2 align ='center'> Criação de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

ou

`POST /register - FORMATO DA REQUISIÇÃO`

ou

`POST /signup - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "yugimuto@gmail.com",
  "password": "12345"
}
```

**\*Atenção**: somente o email e password são obrigatórios para a criação do usuário.\*

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1Z2ltdXRvQGdtYWlsLmNvbSIsImlhdCI6MTY0NzAyMjU5MywiZXhwIjoxNjQ3MDI2MTkzLCJzdWIiOiI1In0.1IFJUO0jd25fNZKP_PXqC-UMvHIm4kbw83RMWpZGm2M",
  "user": {
    "email": "yugimuto@gmail.com",
    "id": 5
  }
}
```

<h2 align="center">Possíveis erros</h2>

Email já cadastrado:

`FORMATO DA RESPOSTA - STATUS 400`

```json
"Email already exists"
```

<h2 align="center">Login</h2>

`POST /login - FORMATO DA REQUISIÇÃO`

ou

`POST /signin - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "josecrispim@gmail.com",
  "password": "12345"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VjcmlzcGltQGdtYWlsLmNvbSIsImlhdCI6MTY0NzAyMzU1MSwiZXhwIjoxNjQ3MDI3MTUxLCJzdWIiOiIyIn0.Gd-kkiQmiM9WPOkloXvYUidCPtgfX7VXa1HwOqsfyNo",
  "user": {
    "email": "josecrispim@gmail.com",
    "id": 2
  }
}
```

<h2 align="center">Games</h2>

<p align="center">Nesse endpoint você poderá ver todos os jogos cadastrados na plataforma e o usuário que o cadastrou.</p>

`GET /games - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
[
  {
    "name": "Alien Isolation",
    "type": "Terror",
    "userId": 2,
    "id": 1
  },
  {
    "name": "Elden Ring",
    "type": "RPG",
    "userId": 2,
    "id": 2
  },
  {
    "name": "God of War",
    "type": "RPG",
    "userId": 3,
    "id": 3
  },
  {
    "name": "God of War 2",
    "type": "RPG",
    "userId": 3,
    "id": 4
  }
]
```

<h2 align="center">Ver os jogos específicos de um usuário</h2>

<p align="center">Nesse endpoint você poderá ver todos os jogos específicos de um usuário, utilizando o seu Id.</p>

`GET /users/:userId/games - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
[
  {
    "name": "Alien Isolation",
    "type": "Terror",
    "userId": 2,
    "id": 1
  },
  {
    "name": "Elden Ring",
    "type": "RPG",
    "userId": 2,
    "id": 2
  },
  {
    "name": "Dark Souls 3",
    "type": "RPG",
    "userId": 2,
    "id": 5
  }
]
```

<h2 align="center">Ver um jogo específico</h2>

`GET /games/:gameId - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
{
  "name": "God of War",
  "type": "RPG",
  "userId": 3,
  "id": 3
}
```

## Rotas que precisam de autenticação

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

<h2 align="center">Cadastrar um novo jogo</h2>

`POST /games - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Dark Souls 2",
  "type": "RPG",
  "userId": 2
}
```

**\*Atenção**: no campo userId, é necessário utilizar o Id do usuário que está cadastrando o jogo.\*

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "name": "Dark Souls 2",
  "type": "RPG",
  "userId": 2,
  "id": 6
}
```

<h2 align="center">Remover um jogo</h2>

`DELETE /games/:gameId - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
{}
```

<h2 align="center">Atualizar as informações de um jogo</h2>

`PUT /games/:gameId - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "New name",
  "type": "type",
  "userId": 2
}
```

**\*Atenção**: no campo userId, é necessário utilizar o Id do usuário que está atualizando o jogo.\*

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "name": "New name",
  "type": "type",
  "userId": 2,
  "id": 6
}
```

<h2 align="center">Visualizar todas as plataformas</h2>

<p align="center">Para ter acesso as plataformas dos outros usuários você precisa estar logado</p>

`GET /plataform - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
[
  {
    "plataform": "ps4",
    "userId": 3,
    "id": 1
  },
  {
    "plataform": "xbox",
    "userId": 3,
    "id": 2
  },
  {
    "plataform": "PC",
    "userId": 3,
    "id": 3
  },
  {
    "plataform": "Nitendo",
    "userId": 2,
    "id": 4
  }
]
```

<h2 align="center">Ver uma plataforma específica</h2>

`GET /plataform/:plataformId - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
{
  "plataform": "xbox",
  "userId": 3,
  "id": 2
}
```

<h2 align="center">Cadastrar uma nova plataforma</h2>

`POST /plataform - FORMATO DA REQUISIÇÃO`

```json
{
  "plataform": "ps4",
  "userId": 3
}
```

**\*Atenção**: no campo userId, é necessário utilizar o Id do usuário que está cadastrando o plataforma.\*

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "plataform": "ps4",
  "userId": 3,
  "id": 2
}
```

<h2 align="center">Remover uma plataforma</h2>

`DELETE /plataform/:plataformId - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
{}
```

<h2 align="center">Atualizar as informações de uma plataforma</h2>

`PUT /plataform/:plataformId - FORMATO DA REQUISIÇÃO`

```json
{
  "plataform": "update",
  "userId": 3
}
```

**\*Atenção**: no campo userId, é necessário utilizar o Id do usuário que está atualizando a plataforma.\*

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "plataform": "update",
  "userId": 3,
  "id": 2
}
```

---
<h2 align="center">The end</h2>
