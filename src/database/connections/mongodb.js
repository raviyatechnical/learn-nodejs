const mongoose = require('mongoose');

const connectMongoDBDatabase = () => {
  console.log('MONGO_URI:', process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`=============MongoDB========================`)
      console.log(`MongoDB Successfully connected to the database.`);
      console.log(`MongoDB connected: ${mongoose.connection.host}`);
      console.log(`============================================`)
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongoDBDatabase;
