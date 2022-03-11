const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 644,
  games:644,
  plataform:640,
});

app.use(cors());
app.use(jsonServer.rewriter({
  '/users/:userId/full' : '/users/:userId?_embed=games',
  '/user/:userId/games' : '/games?userId=:userId'
}));
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
