import React, { useEffect, useState } from "react";
import styles from "../styles/sidebar.module.css";
import {
  Button,
  Checkbox,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [sliderValues, setSliderValues] = useState([0, 80]);
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category");
  const initialPrice = searchParams.get("price");
  const initialRating = searchParams.get("rating");
  const intialPriceRange = searchParams.get("pricerange");
  const intialOffers = searchParams.get("offers");
  const intialDiscount = searchParams.get("discount");

  const [category, setCategory] = useState(initialCategory || "");
  const [rating, setRating] = useState(initialRating || "");
  const [offers, setOffers] = useState(intialOffers || "");
  const [discount, setDiscount] = useState(intialDiscount || "");
  const [clear, setClear] = useState(false);

  useEffect(() => {
    let params = {
      offers,
      rating,
      discount,
    };

    setSearchParams(params);
  }, [offers, rating, discount,sliderValues]);

  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  const handleRating = (e) => {
    const { value } = e.target;
    console.log(value);
    let newRating = [...rating];
    if (newRating.includes(value)) {
      newRating = newRating.filter((el) => el !== value);
    } else {
      newRating.push(value);
    }

    setRating(newRating);
  };
  const handleOffers = (e) => {
    const { value } = e.target;
    console.log(value);
    let newOffers = [...offers];
    if (newOffers.includes(value)) {
      newOffers = newOffers.filter((el) => el !== value);
    } else {
      newOffers.push(value);
    }

    setOffers(newOffers);
  };
  const handleDsicount = (e) => {
    const { value } = e.target;
    console.log(value);
    let newDsicount = [...discount];
    if (newDsicount.includes(value)) {
      newDsicount = newDsicount.filter((el) => el !== value);
    } else {
      newDsicount.push(value);
    }

    setDiscount(newDsicount);
  };

  const applyPricerange = () =>{
    let params = {
      offers,
      rating,
      discount,
      pricefrom: sliderValues[0] * 1000,
      priceto: sliderValues[1] * 1000,
    };
    setSearchParams(params);
  }

  const handleClearRange = () =>{
    setSliderValues([0, 80]);
    let params = {
      offers,
      rating,
      discount,
    };

    setSearchParams(params);

  }

  return (
    <div className={styles.mainsidebar}>
      <div className={styles.allfilters}>
        <Heading className={styles.filterheading}>Filters</Heading>
        <div className={styles.rangefilter}>
          <Text className={styles.headings}>PRICE</Text>
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
              <div className={styles.thumb_value}>{sliderValues[0] * 1000}</div>
            </RangeSliderThumb>
            <RangeSliderThumb index={1}>
              <div className={styles.thumb_value}>{sliderValues[1] * 1000}</div>
            </RangeSliderThumb>
          </RangeSlider>

          {/* <div className={styles.sliderval} value={sliderValues[0] * 1000}>
            <Select placeholder="min" size="xs" w={"100px"}>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="5000">5000</option>
              <option defaultValue={sliderValues[0] * 1000}>
                {sliderValues[0] * 1000}
              </option>
            </Select>
            <p>to</p>
            <Select
              placeholder="max"
              size="xs"
              w={"100px"}
              value={sliderValues[1] * 1000}
            >
              <option value="1000">10000</option>
              <option value="20000">20000</option>
              <option value="100000">10000</option>
              <option defaultValue={sliderValues[1] * 1000}>
                {sliderValues[1] * 1000}
              </option>
            </Select>
          </div> */}

          <div className="buttons">
            <Button onClick={applyPricerange} backgroundColor={"teal"}>Apply</Button>
            <Button onClick={handleClearRange} background={"red"}>Clear</Button>
          </div>
        </div>

        <div className={styles.offers}>
          <Text className={styles.headings}>Customer Ratings</Text>
          <div className={styles.dicounts}>
            <Checkbox
              className={styles.checkbox}
              value={"4"}
              onChange={handleRating}
              defaultChecked={rating.includes("4")}
            >
              {" "}
              4★ & above
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"3"}
              onChange={handleRating}
              defaultChecked={rating.includes("3")}
            >
              {" "}
              3★ & above
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"2"}
              onChange={handleRating}
              defaultChecked={rating.includes("2")}
            >
              {" "}
              2★ & above
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"1"}
              onChange={handleRating}
              defaultChecked={rating.includes("1")}
            >
              {" "}
              1★ & above
            </Checkbox>
          </div>
        </div>
        <div className={styles.offers}>
          <Text className={styles.headings}>OFFERS</Text>

          <div className={styles.dicounts}>
            <Checkbox
              className={styles.checkbox}
              value={"no_cost_emi"}
              onChange={handleOffers}
              defaultChecked={offers.includes("no_cost_emi")}
            >
              {" "}
              No Cost EMI
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"credit_card"}
              onChange={handleOffers}
              defaultChecked={offers.includes("credit_card")}
            >
              {" "}
              Credit Card Offers
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"buy_1_get_1"}
              onChange={handleOffers}
              defaultChecked={offers.includes("buy_1_get_1")}
            >
              {" "}
              Byy 1 Get 1
            </Checkbox>
          </div>
        </div>
        <div className={styles.dicountsmain}>
          <Text className={styles.headings}>DISCOUNTS</Text>

          <div className={styles.dicounts}>
            <Checkbox
              className={styles.checkbox}
              value={"50"}
              onChange={handleDsicount}
              defaultChecked={discount.includes("50")}
            >
              {" "}
              50% or more
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"40"}
              onChange={handleDsicount}
              defaultChecked={discount.includes("40")}
            >
              {" "}
              40% or more
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"30"}
              onChange={handleDsicount}
              defaultChecked={discount.includes("30")}
            >
              {" "}
              30% or more
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"20"}
              onChange={handleDsicount}
              defaultChecked={discount.includes("20")}
            >
              {" "}
              20% or more
            </Checkbox>
            <Checkbox
              className={styles.checkbox}
              value={"10"}
              onChange={handleDsicount}
              defaultChecked={discount.includes("10")}
            >
              {" "}
              10% or more
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};
