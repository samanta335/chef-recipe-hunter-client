import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const ExtraSec2 = () => {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ExtraData")
      .then((response) => response.json())
      .then((data) => setNewData(data));
  }, []);
  return (
    <div className="container align-item-center ">
      <div className="row ">
        <h2 className="text-center text-danger mb-4">
          Famous Food Of Bangladesh
        </h2>
        {newData.map((data) => (
          <div key={data.id} className="col mb-3">
            <Card style={{ width: "16rem" }} className="p-2 mb-2">
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>
                  <h3>{data.name}</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSec2;
