import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const AllShow = () => {
  return (
    <div className="container">
      <h1 className="fw-bold text-info">Our stock Details</h1>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">    
            <div className="fw-bold">Laptop</div>
            <p>Macbook-2018 = <Badge bg="primary" pill>
              3
            </Badge></p>{" "}
           
            <p>Macbook-2019 = <Badge bg="primary" pill>
              2
            </Badge></p>{" "}
           
            <p>Macbook Air-2020 = <Badge bg="primary" pill>
              5
            </Badge></p>{" "}
           
            <p>Macbook Air pro-2020 = <Badge bg="primary" pill>
              4
            </Badge></p>{" "}
            
            <p>Macbook Space-2020 = <Badge bg="primary" pill>
              1
            </Badge></p>{" "}
           
          </div>
          <Badge bg="warning" pill>
            15
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start  bg-dark text-light rounded shadow-3"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Iphone</div>
            <p>Iphone 10 = <Badge bg="primary" pill>
              10
            </Badge></p>{" "}
           
            <p>Iphone 11 = <Badge bg="primary" pill>
              10
            </Badge> </p>{" "}
           
            <p>Iphone 11 pro </p>{" "}
            
            <p>Iphone 11 pro max = <Badge bg="primary" pill>
              10
            </Badge> </p>{" "}
           
            <p>Iphone 12 =  <Badge bg="primary" pill>
              10
            </Badge> </p>{" "}
           
            <p>Iphone 12 pro =  <Badge bg="primary" pill>
              10
            </Badge> </p>{" "}
            
            <p>Iphone 13 pro = <Badge bg="primary" pill>
              10
            </Badge> </p>{" "}
            
            <p>Iphone 13 pro max = <Badge bg="primary" pill>
              10
            </Badge></p>{" "}
           
          </div>
          <Badge bg="info" pill>
            24
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Gadgets</div>
            <p>Apple Watch =  <Badge bg="primary" pill>
            8
          </Badge> </p>
            <p>Apple Ring =  <Badge bg="primary" pill>
            5
          </Badge></p>
            <p>Apple Headphone =  <Badge bg="primary" pill>
            3
          </Badge> </p>
            <p>Apple Airbud =  <Badge bg="primary" pill>
            5
          </Badge></p>
            <p>Apple port  =  <Badge bg="primary" pill>
            3
          </Badge></p>
            <p>Apple Adapter =  <Badge bg="primary" pill>
            6
          </Badge></p>
          </div>
          <Badge bg="success" pill>
            30
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      
    </div>
  );
};

export default AllShow;
