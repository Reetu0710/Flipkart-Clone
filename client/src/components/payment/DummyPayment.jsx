


import React from "react";
import { Box, Typography, Button, Grid, Divider, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const PaytmDummy = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { ORDER_ID, TXN_AMOUNT } = state || {};

  const handlePayment = () => {
    navigate("/", { replace: true });
  };

  return (
    <Paper elevation={3} sx={{p: 4,maxWidth: 500, mx: "auto",mt: 8, borderRadius: 2,backgroundColor: "#f8f9fa"}} >
      
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img  src={`${process.env.PUBLIC_URL}/Paytm_logo.png`} alt="Paytm" style={{ width: 160 }} />
      </Box>     
      <Typography variant="body1" style={{color:"#384e4f" ,textAlign:"center"}} > <strong>Order ID:</strong> {ORDER_ID} </Typography>
      <Typography variant="body1" style={{color:"#384e4f" ,textAlign:"center"}}><strong>Amount:</strong> ₹{TXN_AMOUNT} </Typography>
      
      
      <Box sx={{textAlign: "center", p: 1,border: "1px solid #ddd",borderRadius: 2,backgroundColor: "#fff",mt:2}}>
        <Typography variant="subtitle1" fontWeight="bold" > Scan & Pay </Typography>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=paytm@upi&pn=Paytm" alt="QR"  style={{ width: "150px" }}/>
      </Box>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" >
          Payment Options
        </Typography>
        <Grid container spacing={2}>
          {["UPI", "Paytm Wallet", "Credit / Debit Card", "Net Banking"].map(
            (method, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 1.5,
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#e6f0ff",
                      borderColor: "#1976d2",
                    },
                  }}
                >
                  <Typography variant="body2">{method}</Typography>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handlePayment}
      >
        Pay ₹{TXN_AMOUNT}
      </Button>
    </Paper>
  );
};

export default PaytmDummy;
