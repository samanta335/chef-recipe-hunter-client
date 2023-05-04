import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className="container align-item-center">
      <div className="row  ">
        {allData.map((data) => (
          <div key={data.id} className="col mb-3">
            <Card style={{ width: "18rem" }} className="mt-4">
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text className="fw-semibold">
                  <p className="mb-1 ">Experience: {data.experience}</p>
                  <p className="mb-1">Recipe Number: {data.recipeNumber}</p>
                  <p>
                    <FaHeart style={{ color: "red" }}></FaHeart> {data.Likes}{" "}
                    Likes
                  </p>
                </Card.Text>
                <Link to={`/data/${data.id}`}>
                  <Button variant="danger">View Recipes Button</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
