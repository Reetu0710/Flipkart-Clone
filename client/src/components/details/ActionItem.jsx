import React, { useState } from 'react';
import {Box,Button,styled} from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

const LeftContainer=styled(Box)(({theme})=>({
    minWidth:"40%",
    padding:'40px 0 0 80px',
    [theme.breakpoints.down("lg")]:{
        padding:"20px 40px"
    }
}))
const Image=styled("img")({   
   padding:"15px"
  

});

const StyledButton=styled(Button)(({theme})=>({
    width:"48%",
    height:"50px",
    borderRadius:"2px",
   marginTop:"10px",
    [theme.breakpoints.down("lg")]:{
        width:"46%",
        
    },
    [theme.breakpoints.down("sm")]:{
        width:"48%",
        
    }

}))

const ActionItem = ({product}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [quantity]=useState(1);
    const {id}=product;

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate("/cart");
    }
  
    // const buyNow = async()=>{
    //   console.log("Buy now clicked");
    //  let response=await payUsingPaytm({amount:100,email:"sawna@gmail.com"});
    //  console.log("response",response);
    //  let information = {
    //    action: "https://securegw-stage.paytm.in/order/process",
    //    params: response,
    //  };
    // setTimeout(() => {
    //   post(information);
    // }, 10000);
    // }
  const buyNow = async () => {
    try {
      const res = await payUsingPaytm({ amount: product.price.cost,
         email: "sawna@gmail.com" });    
     

      navigate("/paytm", {
        state: {
          ORDER_ID: res.ORDER_ID,
          TXN_AMOUNT: product.price.cost,
        },
      });
    } catch (error) {
      console.error("Error in payment:", error);
    }
  };



    
  return (
    <>
      <LeftContainer>
        <Box style={{padding: "15px 20px",border: "1px solid #f0f0f0", width: "90%" }}>
          <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton  variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: "#ff9f00" }}>
         <Cart /> Add to Cart
        </StyledButton>
        <StyledButton variant="contained" onClick={()=>  buyNow()} style={{ background: "#fb541b" }}><Flash /> Buy Now </StyledButton>
        
      </LeftContainer>
    </>
  );
}

export default ActionItem
