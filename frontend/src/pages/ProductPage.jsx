import React from "react";
import { ProductCard } from "../components/ProductCard";
import SideBar, { Sidebar } from "../components/Sidebar";
import { ProductList } from "../components/ProductList";
import styled from "styled-components";

export const ProductPage = () => {
  return (
    <DIV>
      <Sidebar />
      <ProductList />
    </DIV>
  );
};

const DIV = styled.div`
  width: 90%;
  margin: 100px auto;
  display: flex;
`;
