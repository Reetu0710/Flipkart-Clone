import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, styled } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productAction";

// components
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  background: "#ffffff" , 
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: 10,
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  flex: 1,
  marginTop: "50px",
  [theme.breakpoints.down("md")]: {
    marginBottom: 20,
  },
}));

const RightBox = styled(Box)`
  flex: 2;
  margin:70px 70px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, loading, product]);

  return (
    <Component>
      {product && Object.keys(product).length > 0 && (
        <Container>
          <LeftBox>
            <ActionItem product={product} />
          </LeftBox>
          <RightBox>
            <ProductDetail product={product} />
          </RightBox>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;

