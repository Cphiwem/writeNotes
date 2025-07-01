// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");
const fs = require("fs");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data/db.json"));
const middlewares = jsonServer.defaults();

const routes = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/routes.json"))
);
const rewriter = jsonServer.rewriter(routes);

app.db = router.db; // Required for json-server-auth

app.use(middlewares);
app.use(rewriter);
app.use(auth);
app.use(router);

app.listen(8000, () => {
  console.log("JSON Server is running on http://localhost:8000");
});
