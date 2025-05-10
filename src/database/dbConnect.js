const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose.connect(
    "mongodb+srv://arunkumarveerapandian4:arunonstep04@nodecluster.znm5vsr.mongodb.net/Netflix"
  );
};

module.exports = {
  dbConnect,
};
