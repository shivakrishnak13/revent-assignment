import React, { useState } from "react";
import {
  Box,
  CheckboxIcon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  border,
  useBoolean,
} from "@chakra-ui/react";
import style from "../styles/navbar.module.css";
import { BsSearchHeartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {

  const [ismenuOpen, setmenu] = useState(false);

  return (
    <div>
      <nav className={style.nav}>
        <a href="#" className="logo">
          ApkaMarket
        </a>

        <ul className={style.categories}>
          <li>Clothing</li>
          <li>Electorinics</li>
          <li>Home Apliances</li>
          <li>Furniture</li>
          <li>Books</li>
        </ul>

        <div className={style.search_box}>
          <InputGroup>
            <Input
              placeholder="Search Product"
              _placeholder={{ color: "black",fontSize:'.8rem' }}
              backgroundColor={"#F5F5F6"}
              _focus={{ borderColor: "white" }}
            />
            <InputRightElement>
              <BsSearchHeartFill color="#717288" className={style.icon} />
            </InputRightElement>
          </InputGroup>
        </div>

        <div className={style.menu}>
          <GiHamburgerMenu
            className={style.hamburger}
            onClick={() => setmenu(true)}
          />
        </div>

        {/* Mobile Menu */}
        <div className={`${style.mobile} ${ismenuOpen ? style.open : ""}`}>
          <IconButton
            icon={<IoMdClose className={style.hamburger}/>}
            onClick={() => setmenu(false)}
            variant="unstyled"
            color="black"
            position={"absolute"}
            right={0}
          />

          <ul className={style.mobilecategories}>
            <li>Clothing</li>
            <li>Electorinics</li>
            <li>Home Apliances</li>
            <li>Furniture</li>
            <li>Books</li>
          </ul>


        </div>
      </nav>
    </div>
  );
};
