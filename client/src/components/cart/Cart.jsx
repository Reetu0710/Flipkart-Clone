import React from 'react';
import { Typography,Box,Grid,Button,styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';

// import { post } from '../../utils/paytm';

const Container=styled(Grid)(({theme})=>({
    padding:"30px 135px",
    [theme.breakpoints.down("md")]:{
        padding:"15px 0"
    }
}));
const LeftComponent=styled(Grid)(({theme})=>({
    paddingRight:20,
    [theme.breakpoints.down("md")]:{
        marginBottom:15
    }
}));

const Header=styled(Box)`
    padding:15px 24px;
    background:#fff;
`;
const ButtonWrapper=styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top:1px solid #f0f0f0;
    
`;
const StyledButton=styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
    border-radius:2px;
    
`;


const Cart = () => {
    const {cartItems}=useSelector((state)=>state.cart);
     const navigate=useNavigate();
    const buyNow = async () => {
      const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price.cost,
        0
      );
        try {
          const res = await payUsingPaytm({ amount: totalAmount,
             email: "sawna@gmail.com" });    
         
    
          navigate("/paytm", {
            state: {
              ORDER_ID: res.ORDER_ID,
              TXN_AMOUNT: totalAmount,
            },
          });
        } catch (error) {
          console.error("Error in payment:", error);
        }
      };
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart
