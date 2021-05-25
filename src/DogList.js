import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./doglist.css";

const DogList = ({ dogs }) => {
  return (
    <div className="doglist">
      <div className=" display-1 text-center doglist_container ">Dog List</div>
      <Container>
        <Row>
          {dogs.map((d, i) => (
            <Col key={i} className=" dog " md={6} lg={3}>
              <img src={d.src} alt={d.name} />
              <h5>{d.name}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DogList;
