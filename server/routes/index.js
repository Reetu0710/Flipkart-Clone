import express from "express";
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts,getProductById } from "../controller/product-controller.js";
import { addPaymentGateway,paytmResponse } from "../controller/paytm-controller.js";


const router=express.Router();

router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/payment", addPaymentGateway);
router.post("/callback", paytmResponse);
router.get("/products",getProducts);
router.get("/product/:id",getProductById);



export default router;
