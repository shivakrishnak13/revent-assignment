import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
        <div className="description">{description}</div>
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
      margin-bottom: 0.4em;
      color: #6c757d;
      text-transform: uppercase;
      letter-spacing: -0.025em;
      line-height: normal;
      word-wrap: break-word;
    }
    h3 {
      font-size: 19px;
      font-family: "Balsamiq Sans", cursive;
    }
  }

  .mySwiper {
    width: 100%;
    z-index: -10;
    
  }

  .description {
      font-size: 12px;
      line-height: 1.5;
      max-height: 2em; 
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
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
