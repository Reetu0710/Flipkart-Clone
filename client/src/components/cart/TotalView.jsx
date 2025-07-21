import React,{useState,useEffect} from 'react'
import {Box,Typography,styled} from '@mui/material';

const Header=styled(Box)`
    padding:15px 24px;
    background:#fff;
    text-align:center;
    border-bottom:1px solid #f0f0f0;
`;
const Heading=styled(Typography)`
    color:#878787;
`;
const Container=styled(Box)`
    padding:20px 22px;
    background:#fff;
    & > p{
        margin-bottom:20px;
        font-size:14px;
    }
    & > h6{
        margin-bottom:20px;
    }
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top:1px solid #f0f0f0;
`;
const Price=styled(Box)`
    float:right;
`;
const Discount=styled(Typography)`
    font-weight:500;
    color:green;

`;

const TotalView = ({cartItems}) => {
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);

   

    const totalAmount = () => {
      let price = 0,
        discount = 0;
      cartItems.forEach((item) => {
        price += item.price.mrp;
        discount += item.price.mrp - item.price.cost;
      });
      setPrice(price);
      setDiscount(discount);
    };

    useEffect(() => {
      totalAmount();
    });
  return (
    <>
      <Box style={{margin:"5px 70px"}}>
        <Header>
          <Heading>Price Details</Heading>
        </Header>
        <Container>
          <Typography>
            Price ({cartItems?.length} item)
            <Price component="span">₹{price}</Price>
          </Typography>
          <Typography>
            Discount 
            <Price component="span">-₹{discount}</Price>
          </Typography>
          <Typography>
            Delivery Charges 
            <Price component="span">₹40</Price>
          </Typography>
          <Typography variant="h6">
            Total Amount 
            <Price component="span">₹{price - discount + 40}</Price>
          </Typography>
          <Discount>You Will Save ₹{discount-40} on this order</Discount>
        </Container>
      </Box>
    </>
  );
}

export default TotalView

