import React,{useState,useEffect} from "react";
import { InputBase, Box,List,ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";

import {useSelector,useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/productAction";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display:flex;
`;

const ListWrapper=styled(List)`
  position: absolute;
  background:#ffffff;
  color:#000;
  margin-top:36px;
`;

const Search = () => {
  const [text,setText]=useState("");
  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])

  const getText=(value)=>{
    setText(value);
  }
  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for products, brands and more"
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {text && (
          <ListWrapper>
            {products
              .filter((prod) =>
                prod.title.longTitle.toLowerCase().includes(text.toLowerCase())
              )
              .map((prod) => (
                <ListItem>
                  <Link to ={`/product/${prod.id}`}
                    onClick={() => {setText('')}}
                    style={{textDecoration:"none",color:"inherit"}}>
                  {prod.title.longTitle}</Link>
                </ListItem>
              ))}
          </ListWrapper>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
