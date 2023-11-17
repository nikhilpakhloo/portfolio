import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://nikhilpakhloo:nikhilpakhlooroot@cluster0.cwmy6gk.mongodb.net/?retryWrites=true&w=majority/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
