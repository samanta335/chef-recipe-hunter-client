import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const ViewRecipe = () => {
  const { id } = useParams();

  const detailsRecipe = useLoaderData();
  console.log(detailsRecipe);
  const {
    name,
    img,
    Likes,
    experience,
    recipeNumber,
    chefImg,
    description,
    recipeName1,
    recipeName2,
    recipeName3,
    ingredients1,
    ingredients2,
    ingredients3,
    method1,
    method2,
    method3,
  } = detailsRecipe;

  return (
    <div>
      <div className="bg-light mt-3 d-flex mx-auto justify-content-center align-item-center ">
        <div>
          <img
            className="w-100 mt-3 mb-3 mx-5  rounded "
            src={detailsRecipe.chefImg}
            alt=""
          />
        </div>
        <div className="ms-5 ps-5 mt-5">
          <h3>{name}</h3>
          <p className="w-50">{description}</p>
          <p className="mb-1 ">Experience: {experience}</p>
          <p className="mb-1">Recipe Number: {recipeNumber}</p>
          <p>
            <FaHeart></FaHeart> {Likes} Likes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
