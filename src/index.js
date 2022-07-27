// import the resoulvers and the typeDef

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// declare the PORT
const PORT = process.env.PORT;
// create a new instance of applow server and pass in options

// connected to your schema and

// start the server and listen for the PORT using an init function

const init = async () => {
  const { url } = await server.listen().then({ port: PORT });

  console.log(`🚀  Server ready at ${url}`);
};

// call the initializes
init();
