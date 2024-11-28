import mongoose from "mongoose";

export default async function connect() {
  try {
    // Ensure the MongoDB URL is set
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not set");
    }

    // Register event listeners
    mongoose.connection.on("connected", () => {
      console.log(`[${new Date().toISOString()}] Connected to MongoDB`);
    });
    mongoose.connection.on("error", (err) => {
      console.error(`[${new Date().toISOString()}] MongoDB connection error:`, err);
    });
    mongoose.connection.on("disconnected", () => {
      console.warn(`[${new Date().toISOString()}] MongoDB disconnected`);
    });

    // Attempt to connect to the database
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`[${new Date().toISOString()}] Connection attempt successful`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error connecting to MongoDB:`, error);
  }
}
