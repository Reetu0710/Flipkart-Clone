import React from "react";
import { styled } from "@mui/material/styles";
import {imageURL } from "../../constant/data";



const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  marginTop: "20px",
}));

const ImageBox = styled("div")(({ theme }) => ({
  flex: "1 1 calc(33.33% - 16px)",
  [theme.breakpoints.down("md")]: {
    flex: "1 1 calc(50% - 16px)",
  },
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 100%",
  },
}));

const BannerImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "4px",
});

const MidSection = () => {
  const url = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <FlexContainer>
        {imageURL.map((img, index) => (
          <ImageBox key={index}>
            <BannerImage src={img} alt="banner" />
          </ImageBox>
        ))}
      </FlexContainer>
      <BannerImage src={url} style={{ marginTop: 20 }} alt="main-banner" />
    </>
  );
};

export default MidSection;
