import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../redux/product/action";
import { ProductCard } from "./ProductCard";
import { Select } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {

  
  const { isLoading, isError, data } = useSelector((store) => store);
  const [searchParams, setSearchParams] = useSearchParams();
  const [_order,setOrder] = useState("")
  const [_sort,setsort]  = useState("");


  const maincategory = searchParams.get("category");
  const rating = searchParams.get("rating");
  const priceRange = searchParams.get("pricerange");
  const offers = searchParams.get("offers");
  const discount = searchParams.get("discount");
  const location = useLocation();

  const dispatch = useDispatch();


  useEffect(() => {
    let paramsObj = {
      params : {
        maincategory: maincategory || "clothing",
          _order,
          _sort
      }
    }

    console.log(paramsObj)
    dispatch(getProducts(paramsObj));
  }, [location.search,(_sort && _order)]);

  const handleSort = (e)=>{
    const {value} = e.target;
    if(value == "asc"){
      setsort("price");
      setOrder("asc");
    }else if (value == "desc"){
      setsort("price");
      setOrder("desc");
    }else{
      setsort("rating");
      setOrder("desc");
    }
  }

  // console.log(data);?

  return (
    <DIV>
      <div className="sorting">
     
      <div className="select">
      <Select  variant='outline' placeholder='Sort By' fontFamily={'sans-serif'} onChange={handleSort}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
        <option value="rating">Customer Rating</option>
      </Select>

      </div>
      
      </div>

      <div className="products">
        {data?.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`

  .products {
    margin-top:20px;
    display: grid;
    grid-template-columns: repeat(4, 230px);
    gap: 20px;
    margin-left: 2%;
  }
  .empty{
    width: 250px;
  }
  .sorting{
    width: 100%;
    display: flex;
    justify-content: end;
    
  }

  .select{
    width: 220px;
  }

  @media screen and (min-width: 1291px) and (max-width: 1358px) {
    .sorting{
      width: 18%;
    }
    grid-template-columns: repeat(4, 210px);
  }

  @media screen and (max-width: 1291px) {
    /* .sorting{
      width: 16%;
    } */
    .products {
    grid-template-columns: repeat(4, 180px);
    }
  }

  @media screen and (max-width: 1121px) {
    /* .sorting{
      width: 15%;
    } */
    .products {
    grid-template-columns: repeat(3, 190px);
  }
}
  @media screen and (max-width: 600px) {

    .products {
    grid-template-columns: repeat(2, 200px);
  }
}
@media screen and (max-width: 749px){
  .sorting{
    display: none;
  }
}

`;
