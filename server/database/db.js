import mongoose from "mongoose";


 const Connection = async(username,password) => {
      const URL = `mongodb+srv://${username}:${password}@ecommerce-web.wpivft6.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-web`;
    
  try {
    await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default Connection;
