import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection success");
  } catch (e) {
    console.log(e);
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};

export default connectDB;
