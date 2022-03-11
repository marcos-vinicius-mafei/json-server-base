<h1 align="center"> Kenzie Games - API </h1>

Aqui os usuários podem cadastrar os seus jogos preferidos e as plataformas que mais utilizam, dessa forma, outros usuários também poderam ver o seu perfil e interesses, assim podendo compartilhar informações e afeições em comum.

## **Endpoints**

A API possui 5 endpoints para visualização de usuário, jogos e plataformas, assim como jogos específicos de um usuário. Além disso, existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

## **Rotas que não precisam de autenticação**

 <h2 align="center">Listando usuários</h2>
 Nessa API o usuário sem fazer login ou se cadastrar pode ver outros usuários já cadastrados na plataforma, na API podemos acessar a lista dessa forma:

 `GET /users`

## json
```json
{
	"plataform": [
		"xbox",
		"PC"
	],
	"userId": 2,
	"id": 4
}
```
## shell

```shell
npm install
```
## javascript

```js
app.use(cors());
app.use(jsonServer.rewriter({
  '/user/:userId' : '/users/:userId?_embed=games&_embed=plataform'
}));
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
```

### Cadastro

| Método    | endpoint  |
| --------- | --------- |
| POST      | /register |
| POST      | /signup   |
| POST      | /users    |
| **teste** | ola       |

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"