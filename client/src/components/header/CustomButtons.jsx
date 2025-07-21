import React, { useContext, useState } from "react";
import { Box, Button, Typography,Badge, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../../context/DataProvider";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

//components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";


const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "0 3% 0 auto", 
  gap: "32px",
  "& > button, & > p, & > div": {
    marginLeft: "38px" ,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 0,
    gap: "12px",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color:"inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}))

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  
`;

const CustomButtons = () => {
  const[open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext);
  const {cartItems}=useSelector((state)=>state.cart);

  const openDialog=()=>{
    setOpen(true);
  }
  return (
    <>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton variant="contained" onClick={() => openDialog()}>
            Login
          </LoginButton>
        )}

        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        <Container to="/cart">
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{ marginLeft: 5}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
      </Wrapper>
    </>
  );
};

export default CustomButtons;
