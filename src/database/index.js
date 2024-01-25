import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://trungdoan:huutrung2202@netflix-database.asxtu9m.mongodb.net/"
    );
    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
