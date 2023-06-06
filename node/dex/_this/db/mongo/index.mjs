import mongoose from "mongoose";
import config from 'config';

const connectDB = async (collection) => {
  try {
    const connection = await mongoose.createConnection(config.get(collection), {
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 4
    });

    console.log('MongoDB Connected...');
    return connection;
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
