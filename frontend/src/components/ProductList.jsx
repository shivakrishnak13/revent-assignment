import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../redux/product/action';
import { ProductCard } from './ProductCard';

export const ProductList = () => {

  
  const {isLoading,isError,data} = useSelector((store)=> store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts);
  },[])

  console.log(data)

  return (
    <DIV>

      {
        data?.map((item)=>{
          return <ProductCard key={item.id} {...item}/>
        })
      }

    </DIV>
  )
}


const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4,230px);
  gap: 20px;
  margin-left: 2%;


  @media screen and (min-width:1291px) and (max-width:1358px) {

    grid-template-columns: repeat(4,210px);
  
}

@media screen and (max-width:1291px) {
  grid-template-columns: repeat(4,180px);
}

@media screen and (max-width:1121px){
  grid-template-columns:repeat(3 , 190px);
}
@media screen and (max-width:600px){
  grid-template-columns:repeat(2, 200px );
}
`;