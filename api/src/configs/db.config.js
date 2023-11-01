const {
  config: {
    db: { url: MONGO_URI },
  },
} = require("./dev.config");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

try {
  const connection = mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => {
      console.log("DB Connected ✔");
    })
    .catch((e) => {
      console.log(e);
    });

  exports.mongoconnction = connection;
} catch (e) {
  console.log(e);
}
