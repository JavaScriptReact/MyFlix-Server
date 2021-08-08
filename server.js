const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("apollo-server-express");
const env_data = require("./config");

const app = express();
const server = http.createServer(app);

// const graph_server = new ApolloServer({
//   //   resolvers,
//   //   typeDefs,
//   subscriptions: {
//     path: "/subscriptions",
//   },
// });

// graph_server.start().then(function () {
//   graph_server.applyMiddleware({ app });
//   graph_server.installSubscriptionHandlers();

//   server.listen(env_data.PORT, () => {
//     console.log(
//       `GraphQL : ${graph_server.graphqlPath}, Subscription : ${graph_server.subscriptionsPath}, Port : ${env_data.PORT}`
//     );
//   });
// });

app.use("/images", express.static(path.join(__dirname, "images")));
app.get("/images/:image_name", (req, res) => {
  const { image_name } = req.params;
  res.sendFile(path.join(__dirname, "images", image_name));
});

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(env_data.PORT, () =>
  console.log("Server started..." + env_data.PORT)
);
