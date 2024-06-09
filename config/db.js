import mongoose from "mongoose";

const connectDatabase = () => {
  console.log('MONGO_URI:', process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected mongo db");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDatabase;
