import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
import {
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

export const Sidebar = () => {
  const [sliderValues, setSliderValues] = useState([0, 80]);

  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };


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
              <div className={styles.thumb_value}>{sliderValues[0]*1000}</div>
            </RangeSliderThumb>
            <RangeSliderThumb index={1}>
              <div className={styles.thumb_value}>{sliderValues[1]*1000}</div>
            </RangeSliderThumb>
          </RangeSlider>

          <div className={styles.sliderval} value={sliderValues[0]*1000} >
          <Select placeholder='min' size='xs' w={'100px'} >
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="5000">5000</option>
            <option defaultValue={sliderValues[0]*1000}>{sliderValues[0]*1000}</option>
          </Select>
          <p>to</p>
          <Select placeholder='max' size='xs'  w={'100px'} value={sliderValues[1]*1000} >
            <option value="1000">10000</option>
            <option value="20000">20000</option>
            <option value="100000">10000</option>
            <option defaultValue={sliderValues[1]*1000}>{sliderValues[1]*1000}</option>
          </Select>
          </div>
        </div>


        <div className={styles.offers}>
        <Text className={styles.headings}>Customer Ratings</Text>
            <div className={styles.dicounts}>
            <Checkbox className={styles.checkbox} > 4★ & above</Checkbox>
            <Checkbox className={styles.checkbox} > 3★ & above</Checkbox>
            <Checkbox className={styles.checkbox} > 2★ & above</Checkbox>
            <Checkbox  className={styles.checkbox}> 1★ & above</Checkbox>
            </div>


        </div>
        <div className={styles.offers}>
        <Text className={styles.headings}>OFFERS</Text>

            <div className={styles.dicounts}>
            <Checkbox className={styles.checkbox} > No Cost EMI</Checkbox>
            <Checkbox className={styles.checkbox} > Credit Card Offers</Checkbox>
            <Checkbox className={styles.checkbox} > Byy 1 Get 1</Checkbox>
           
            </div>


        </div>
        <div className={styles.dicountsmain}>
        <Text className={styles.headings}>DISCOUNTS</Text>

            <div className={styles.dicounts}>
            <Checkbox className={styles.checkbox} > 50% or more</Checkbox>
            <Checkbox className={styles.checkbox} > 40% or more</Checkbox>
            <Checkbox className={styles.checkbox} > 30% or more</Checkbox>
            <Checkbox className={styles.checkbox} > 20% or more</Checkbox>
            <Checkbox className={styles.checkbox} > 10% or more</Checkbox>
            </div>


        </div>



      </div>
    </div>
  );
};
