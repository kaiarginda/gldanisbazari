// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   const DB =
//     "mongodb+srv://tornike:tornike@shopcluster.bqft7gb.mongodb.net/product?retryWrites=true&w=majority";
//   mongoose
//     .connect(DB, {
//       useNewUrlParser: true,
//     })
//     .then(() => console.log("DB connnection successful!"));
// };

import mongoose from "mongoose";

// Assuming `MONGO_URI` is your MongoDB connection string
const MONGO_URI =
  "mongodb+srv://tornike:tornike@shopcluster.bqft7gb.mongodb.net/product?retryWrites=true&w=majority";

export const connectMongoDB = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 10, // Adjust this based on your needs
  });

  console.log("DB connection successful!");
};
