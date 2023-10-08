import React from "react";
import { BiSolidStarHalf, BiStar } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import styled from "styled-components";

const StarRating = ({ rating }) => {
  const getStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<AiTwotoneStar key={i} color="#1A4C7B"/>);
      } else if (i === fullStars && halfStar) {
        stars.push(<BiSolidStarHalf key={i} color="#1A4C7B"/>);
      } else {
        stars.push(<BiStar key={i} color="#1A4C7B"/>);
      }
    }

    return stars;
  };

  return <Star>{getStars()}</Star>;
};

export default StarRating;

const Star = styled.div`
    display: flex;
    align-items: center;
`;