import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import SideBar, { Sidebar } from "../components/Sidebar";
import { ProductList } from "../components/ProductList";
import styled from "styled-components";
import { Button, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { BiSort } from "react-icons/bi";
import { MdFilterAlt } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { GiStarsStack } from "react-icons/gi";
import { useSearchParams } from "react-router-dom";

export const ProductPage = () => {
  const [isOptions, toggleOptions] = useState(false);
  const [toggleSortFilter, setToggle] = useState(false);
  const optionsRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [_order, setOrder] = useState("");
  const [_sort, setsort] = useState("");
  const [sliderValues, setSliderValues] = useState([0, 80]);
  const initialRating = searchParams.getAll("rating");
  


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        toggleOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    let params ={
      sort : _sort,
      order:  _order ,
   }

   setSearchParams(params);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [_sort,_order]);


  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  const handleSort = (value) => {
    
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

   
    toggleOptions(false);
  };

  return (
    <DIV>
      <Sidebar />
      <ProductList />
      <div className="mobileoptions" ref={optionsRef}>
        <div className={`options ${isOptions ? "show" : ""}`}>
          {toggleSortFilter ? (
            <div className="sort">
              <Text className="headingsort">Sort By</Text>
              <div className="sortoptions">
                <div className="price">
                  <HiOutlineCurrencyRupee />
                  <Text onClick={()=> handleSort("asc")}>Price: Low to High</Text>
                </div>
                <div className="price">
                  <HiOutlineCurrencyRupee />
                  <Text onClick={()=> handleSort("desc")}>Price: Hight to Low</Text>
                </div>
                <div className="price">
                  <GiStarsStack />
                  <Text onClick={()=> handleSort("rating")}>Customer Rating</Text>
                </div>
              </div>
              <div className="buttons">
                <Button background={'red'}>Clear</Button>
              </div>
            </div>
          ) : (
            <div className="filter">
              <Text className="headingsort">Filter By</Text>
              <div className="range_filter">
                <Text className="headingsfilter">PRICE</Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={sliderValues}
                  onChange={handleSliderChange}
                  mt={10}
                  ml={5}
                  w={"90%"}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0}>
                    <div className="thumb_value">
                      {sliderValues[0] * 1000}
                    </div>
                  </RangeSliderThumb>
                  <RangeSliderThumb index={1}>
                    <div className="thumb_value">
                      {sliderValues[1] * 1000}
                    </div>
                  </RangeSliderThumb>
                </RangeSlider>
              </div>
              <div className="buttons">
                <Button backgroundColor={'teal'}>Apply</Button>
                <Button background={'red'}>Clear</Button>
              </div>
            </div>
          )}
        </div>

        <div className="headings">
          <div
            className="icons"
            onClick={() => {
              if (isOptions) {
                setToggle(true);
              } else {
                toggleOptions(!isOptions);
                setToggle(true);
              }
            }}
          >
            <BiSort className="icon" />
            <Text>SORT</Text>
          </div>
          <div
            className="icons"
            onClick={() => {
              if (isOptions) {
                setToggle(false);
              } else {
                toggleOptions(!isOptions);
                setToggle(false);
              }
            }}
          >
            <MdFilterAlt className="icon" />
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
  

  .mobileoptions {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
  }

  .icons {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .headings {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 50px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    z-index: 1000;
  }

  .options {
    width: 100%;
    height: 200px;
    border-top: 1px solid rgba(27, 31, 35, 0.15);
    transform: translateY(200%);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    background-color: white;
  }

  .options.show {
    transform: translateY(0);
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
  }

  .buttons{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
    font-size: .5rem;
    button{
      width: 60px;
      height: 40px;
    }
  }
  @media screen and (max-width: 749px) {
    .mobileoptions {
      display: block;
    }

    .price {
      display: flex;
      align-items: center;
      padding: 5px;

      p {
        margin-left: 5px;
      }
    }

    .headingsort {
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      border-bottom: 1px solid rgba(27, 31, 35, 0.15);
      padding-left: 5px;
      margin-top: 3px;
      margin-bottom: 3px;
    }

    .thumb_value{
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    background-color: white;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
  .headingsfilter{
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Poppins',sans-serif ;
    padding: 5px;
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
  }

  }
  @media screen and (max-width: 700px) {
    .icons {
      width: 20%;
    }
  }
`;
