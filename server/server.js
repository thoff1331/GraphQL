var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

// GraphQL schema
var schmea = buildSchema(`
type Query {
    message: String
}
`);
var root = {
  message: () => "Hello World"
};

//Express server and Graphql endpoint
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schmea,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`Express Graphql server running here again`);
});
