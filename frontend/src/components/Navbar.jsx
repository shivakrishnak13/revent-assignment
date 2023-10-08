import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  categoryProducts,
  getProducts,
  searchProducts,
} from "../redux/product/action";
import { PRODUCT_SUCCESS } from "../redux/product/actionType";
import { useSearchParams } from "react-router-dom";

export const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { allprods } = useSelector((store) => store);
  const [ismenuOpen, setmenu] = useState(false);
  const [search, setSearch] = useState("");

  // const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(searchProducts);
  }, []);

  const handleSearch = () => {
    const filteredProducts = allprods.filter((product) => {
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    });

    dispatch({ type: PRODUCT_SUCCESS, payload: filteredProducts });
  };

  const handleCategory = (value) => {
    let params = {
      category: value || "clothing",
    };

    setSearchParams(params);

    let paramsObj = {
      params: {
        maincategory: value || "clothing",
        offers:[],
        rating:[],
        discount:[],
        price_lte:100000,
        
      },
    };
    dispatch(categoryProducts(paramsObj));
  };

  return (
    <div>
      <nav className={style.nav}>
        <a href="#" className="logo">
          ApkaMarket
        </a>

        <ul className={style.categories}>
          <li onClick={() => handleCategory("clothing")}>Clothing</li>
          <li onClick={() => handleCategory("electronics")}>Electorinics</li>
          <li onClick={() => handleCategory("home_appliances")}>
            Home Apliances
          </li>
          <li onClick={() => handleCategory("furniture")}>Furniture</li>
          <li onClick={() => handleCategory("books")}>Books</li>
        </ul>

        <div className={style.search_box}>
          <InputGroup>
            <Input
              placeholder="Search Product"
              _placeholder={{ color: "black", fontSize: ".8rem" }}
              backgroundColor={"#F5F5F6"}
              _focus={{ borderColor: "white" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputRightElement onClick={handleSearch}>
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
            icon={<IoMdClose className={style.hamburger} />}
            onClick={() => setmenu(false)}
            variant="unstyled"
            color="black"
            position={"absolute"}
            right={0}
          />

          <ul className={style.mobilecategories}>
            <li onClick={() => handleCategory("clothing")}>Clothing</li>
            <li onClick={() => handleCategory("electronics")}>Electorinics</li>
            <li onClick={() => handleCategory("home_appliances")}>
              Home Apliances
            </li>
            <li onClick={() => handleCategory("furniture")}>Furniture</li>
            <li onClick={() => handleCategory("books")}>Books</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
