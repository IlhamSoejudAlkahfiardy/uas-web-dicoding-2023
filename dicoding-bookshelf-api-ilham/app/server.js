const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const port = 9000;
const host = "localhost";

const server = async () => {
  const server = Hapi.server({
    port: port,
    host: host,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log("Server running on port: %s", server.info.uri);
};

module.exports = server;
