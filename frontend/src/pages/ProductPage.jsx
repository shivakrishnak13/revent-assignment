import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import SideBar, { Sidebar } from "../components/Sidebar";
import { ProductList } from "../components/ProductList";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import {BiSort} from "react-icons/bi";
import {MdFilterAlt} from "react-icons/md";

export const ProductPage = () => {


  const [isOptions ,toggleOptions] = useState(false);
  const [toggleSortFilter ,setToggle] = useState(false);



  return (
    <DIV>
      <Sidebar />
      <ProductList />
      <div className="mobileoptions">
          <div className={`options ${isOptions ? 'show' : ''}`}>

            <div className="sort">Sort</div>
            <div className="filter">Filter</div>


          </div>
         
           
         
           <div className="headings">
            <div className="icons" onClick={()=> toggleOptions(!isOptions)}>
              <BiSort className="icon"/>
              <Text>SORT</Text>
            </div>
            <div className="icons" onClick={()=> toggleOptions(!isOptions)}>
              <MdFilterAlt className="icon"/>
              <Text>Filter</Text>
            </div>
           </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 90%;
  margin: 100px auto;
  display: flex;

  .mobileoptions{
     position: fixed;
     bottom: 0;
     right: 0;
     left: 0;
     padding: 10px 20px;
     
     
  }

  .icons{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem; 
    cursor: pointer;
  }

  .icon{
    width: 1.5rem;
    height: 1.5rem;
  }

  .headings{
    width: 100%;
    display: flex;
    justify-content: space-around;
    
  }

  
  
  
  .options{
    width: 100%;
    height: 200px;
    border: 1px solid green;
    transform: translateY(100%); 
    transition: transform 0.3s ease;
  }
  
  
  .options.show {
  
  transform: translateY(0); 
  }




  @media screen and (max-width:760px) {
     display: block;
  }
`;
