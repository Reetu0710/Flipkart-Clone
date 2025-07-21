
import './App.css';
import {Box} from '@mui/material';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

// import DummyPaymentPage from "./components/payment/DummyPayment";
// import OrderSuccess from "./components/payment/Order-Sucess"; // Create this
import PaytmDummy  from './components/payment/DummyPayment';

import DataProvider from './context/DataProvider';

import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<DetailView />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/paytm" element={<PaytmDummy />} />
            {/* <Route path="/payment" element={<DummyPaymentPage />} />
            <Route path="/order-success" element={<OrderSuccess />} /> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
