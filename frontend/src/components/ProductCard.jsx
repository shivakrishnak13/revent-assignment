import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import StarRating from "./StarRating";


export const ProductCard = ({
  id,
  title,
  description,
  maincategory,
  rating,
  price,
  images,
}) => {
  const [isHovered, setIsHovered] = useState(false);


  function truncateDescription(description) {
    const maxLength = 40; 
    if (description.length <= maxLength) {
      return description; 
    }
  
    const truncatedDescription = description.slice(0, maxLength);
  
    if (truncatedDescription[truncatedDescription.length - 1] === " ") {
      return `${truncatedDescription.slice(0, -1)}...`;
    }
    const lastSpaceIndex = truncatedDescription.lastIndexOf(" ");
    return `${truncatedDescription.slice(0, lastSpaceIndex)}...`;
  }
  

  

  return (
    <DIV
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="image">
          <img src={images[0]} alt="prod" />
        </div>
      )}

      <div className="details">
        <h2>{maincategory}</h2>
        <h3>{title}</h3>
        <p>
          <strong>₹{price}.0</strong>
        </p>
        <div className="rating">

        <StarRating rating={rating}/> 
        </div>
        <div className="description">{truncateDescription(description)}</div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  width: 100%;

  .image {
    width: 100%;

    img {
      width: 100%;
      
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
      font-size: 1.2rem;
      margin-bottom: 0.2em;
      font-family: "Poppins", sans-serif;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .mySwiper {
    width: 100%;
    z-index: -10;
    
  }

  .description {
      font-size: .8rem;
      line-height: 1.5;
      color: #535766;
    }

   .rating{
    padding: 4px 0;
   }

  @media screen and (max-width:1291px){
    .details{
      h2{
        font-size: 15px;
      }
      h3{
        font-size: 15px;
      }
    }
  }


`;
