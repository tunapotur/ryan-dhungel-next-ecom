import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // DB_URI_LOCAL for local connection
  mongoose.connect(process.env.DB_URI, {
    dbName: "ryan-dhungel-next-ecom",
  });
};

export default dbConnect;
