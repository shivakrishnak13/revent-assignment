import React from "react";
import {Input} from "@chakra-ui/react"
import {style} from "../styles/navbar.module.css";

export const Navbar = () => {

    
  return (
    <div>
      <nav className="nav">
        
        <a href="#" className="logo">
          ApkaMarket
        </a>
       
        <div className="search-box">
          <Input type="text" placeholder="Search here..." />
        </div>

      </nav>
    </div>
  );
};
