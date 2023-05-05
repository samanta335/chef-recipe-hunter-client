import React, { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    rating,
  } = detailsRecipe;
  const favorite = () =>
    toast.success("Favorite Added", {
      position: toast.POSITION.TOP_CENTER,
    });
  let btnRef = useRef();

  const onBtnClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };

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
        <div className="ms-5 ps-5 mt-5 ">
          <h3>{name}</h3>
          <p className="w-50">{description}</p>
          <p className="mb-1 ">Experience: {experience}</p>
          <p className="mb-1">Recipe Number: {recipeNumber}</p>
          <p>
            <FaHeart></FaHeart> {Likes} Likes
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center">Chef's Recipe</h2>
        <Card className="w-75 mx-auto mt-3 ">
          <Card.Header>Recipe-1</Card.Header>
          <Card.Body>
            <Card.Title>
              <h4>
                <span className="fw-semibold">Recipe Name:</span> {recipeName1}
              </h4>
            </Card.Title>
            <Card.Text>
              <p>
                <span className="fw-semibold">Ingredients:</span> {ingredients1}
              </p>
              <p>
                <span className="fw-semibold">Method:</span> {method1}
              </p>
            </Card.Text>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            ></Rating>
            <span className="ms-1"> {rating}</span>
            <Button
              variant="info"
              className="ms-5 "
              ref={btnRef}
              onClick={() => {
                onBtnClick(), favorite();
              }}
            >
              <FaHeart style={{ color: "red" }}></FaHeart> Favorite
            </Button>
          </Card.Body>
        </Card>
        <Card className="w-75 mx-auto mt-3">
          <Card.Header>Recipe-2</Card.Header>
          <Card.Body>
            <Card.Title>
              <h4>
                <span className="fw-semibold">Recipe Name:</span> {recipeName2}
              </h4>
            </Card.Title>
            <Card.Text>
              <p>
                <span className="fw-semibold">Ingredients:</span> {ingredients2}
              </p>
              <p>
                <span className="fw-semibold">Method:</span> {method2}
              </p>
            </Card.Text>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            ></Rating>
            <span className="ms-1"> {rating}</span>
            <Button variant="info" className="ms-5 " onClick={favorite}>
              <FaHeart style={{ color: "red" }}></FaHeart> Favorite
            </Button>
          </Card.Body>
        </Card>
        <Card className="w-75 mx-auto mt-3">
          <Card.Header>Recipe-3</Card.Header>
          <Card.Body>
            <Card.Title>
              <h4>
                <span className="fw-semibold">Recipe Name:</span> {recipeName3}
              </h4>
            </Card.Title>
            <Card.Text>
              <p>
                <span className="fw-semibold">Ingredients:</span> {ingredients3}
              </p>
              <p>
                <span className="fw-semibold">Method:</span> {method3}
              </p>
            </Card.Text>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            ></Rating>
            <span className="ms-1"> {rating}</span>
            <Button variant="info" className="ms-5 " onClick={favorite}>
              <FaHeart style={{ color: "red" }}></FaHeart> Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ViewRecipe;
