import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../redux/product/action";
import { ProductCard } from "./ProductCard";
import { Select, Text } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

export const ProductList = () => {
  const { isLoading, isError, data } = useSelector((store) => store);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const intialSort = searchParams.get("sort");
  const intialOrder = searchParams.get("order");
  const maincategory = searchParams.get("category");
  const rating = searchParams.getAll("rating");
  const priceFrom = searchParams.get("pricefrom");
  const priceTo = searchParams.get("priceto");
  const offer = searchParams.getAll("offers");
  const discount = searchParams.getAll("discount");
  const location = useLocation();

  const [_sort, setsort] = useState(intialSort ||"");
  const [_order, setOrder] = useState(intialOrder ||"");
  const dispatch = useDispatch();

  const findSmallestNumber = (array) => {
    if (array.length === 0) {
      return 0;
    }

    let smallest = +array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }

    return smallest;
  };

  useEffect(() => {
    let paramsObj = {
      params: {
        maincategory: maincategory || "clothing",
        offer,
        rating_gte: findSmallestNumber(rating),
        discount_gte: findSmallestNumber(discount),
      },
    };

    _order && (paramsObj.params._order = _order);
    _sort && (paramsObj.params._sort = _sort);
    +priceFrom>0 && (paramsObj.params.price_lte= +priceTo);
    +priceTo<100000 && (paramsObj.params.price_gte= +priceFrom);

    console.log('hai')
    // console.log(paramsObj)
    dispatch(getProducts(paramsObj));
  }, [location.search, _sort, _order]);

  const handleSort = (e) => {
    const { value } = e.target;
    if (value == "asc") {
      setsort("price");
      setOrder("asc");
    } else if (value == "desc") {
      setsort("price");
      setOrder("desc");
    } else {
      setsort("rating");
      setOrder("desc");
    }
  };

  //  console.log(discount);

  return (
    <DIV>
      <div className="sorting">
        <div className="select">
          <Select
            variant="outline"
            placeholder="Sort By"
            fontFamily={"sans-serif"}
            onChange={handleSort}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </Select>
        </div>
      </div>

      <div className="products">
        {isLoading ? (
          [...new Array(22)].map((el,i)=>{
            return <SkeletonCard key={i} />
           }) 
        ) : isError ? (
          <Text>Something Went Wrong</Text>
        ) : 
        data.length==0?
        (
          <div className="no-products-message">
          No products available for your search/filter criteria.
          </div>
        )
        
          :
        (
          data?.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })
        )
      }
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .products {
   
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 230px);
    gap: 20px;
    margin-left: 2%;
  }
  .empty {
    width: 250px;
  }
  .sorting {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .select {
    width: 220px;
  }

  .no-products-message{
    width: 900px;
    height: 70vh;
    display: flex;
    justify-content:center;
    align-items: center;
    font-weight: 500;
  }

  @media screen and (min-width: 1291px) and (max-width: 1358px) {
    /* .sorting {
      width: 18%;
    } */
    .products{
    grid-template-columns: repeat(4, 210px);
  }
  .no-products-message{
    width: 500px;
    height: 70vh;
   
  }
}

  @media screen and (max-width: 1291px) {
    /* .sorting{
      width: 16%;
    } */
    .products {
      grid-template-columns: repeat(4, 180px);
    }
    .no-products-message{
    width: 400px;
    height: 70vh;
   
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
    .no-products-message{
    width: 300px;
    height: 70vh;
   
  }
  }
  @media screen and (max-width: 749px) {
    .sorting {
      display: none;
    }
    .no-products-message{
    width: 200px;
    height: 70vh;
   
  }
  }
`;
