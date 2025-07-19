import {products} from "./constant/products.js";
import Product from "./schema/product-schema.js";

const DefaultData=async()=>{
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data inserted successfully");
    }
    catch(error){
        console.log("Error while inserting default data",error.message);
    }
}

export default DefaultData ;