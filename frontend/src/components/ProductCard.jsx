import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import StarRating from "./StarRating";

export const ProductCard = ({
  id,
  title,
  description,
  maincategory,
  rating,
  price,
  images,
  discount,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  let hoverTimeout;
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 300); 
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout); 
    setIsHovered(false);
  };

  return (
    <DIV
      className="main"
      onMouseEnter={()=> handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHovered ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img className="prod_img" src={imageUrl} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="image">
          <img src={images[0]} alt="prod" />
        </div>
      )}

      <div className="details">
        <h2>{maincategory=='home_appliances'? "Home Appliances" : maincategory}</h2>
        <h3>{title}</h3>
        <div className="description">{description}</div>
        <div className="rating">
          <StarRating rating={rating} />
        </div>
        <p>
          <strong>₹{price}.0</strong>
          <span>({discount}% OFF)</span>
        </p>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    .main {
      width: 101%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      border-radius: 0.5rem;
    }
    
  }
  

  .prod_img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      object-fit: contain;
  }

  .image {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
  .details {
    padding: 10px;
    h2 {
      font-weight: bold;
      color: #6c757d;
      text-transform: uppercase;
      letter-spacing: -0.025em;
      line-height: normal;
      word-wrap: break-word;
    }
    h3 {
      font-family: "Rubik", sans-serif;
      font-size: 1.2rem;
      margin-bottom: 0.2em;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
    }
  }

  .mySwiper {
    width: 100%;
    height: 300px;
    margin: auto;
    z-index: -10;
    
  }

  .description {
    font-size: 0.8rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #535766;
  }

  .rating {
    padding: 5px 0;
  }
  p {
    span {
      font-size: 0.6rem;
      margin-left: 0.2rem;
      color: #1a4c7b;
    }
  }

  @media screen and (max-width: 1291px) {
    .details {
      h2 {
        font-size: 15px;
      }
      h3 {
        font-size: 15px;
      }
    }
  }
`;
