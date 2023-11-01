const app = require("./src/app");

// imports
const {
  config: { port },
} = require("./src/configs/dev.config");

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
