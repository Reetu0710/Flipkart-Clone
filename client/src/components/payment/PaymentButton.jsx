// src/components/cart/PaymentButton.js
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentButton = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    const res = await axios.post("http://localhost:8000/payment");
   
    navigate("/paytm", {
      state: {
        ORDER_ID: res.ORDER_ID,
        TXN_AMOUNT: res.TXN_AMOUNT,
      },
    });
  };

  return <button onClick={handlePayment}>Proceed to Paytm</button>;
};

export default PaymentButton;
