import React from "react";
import "./dogdetails.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const DogDetail = ({ dog }) => {
  return (
    <div className="dogdetails">
      <Container>
        <Row className="justify-content-center img-details ">
          <Col xs={11} sm={8} md={7}>
            <Card className="des">
              <CardImg className="img-fluid img" src={dog.src} />
              <CardBody>
                <CardText tag="h2">{dog.name}</CardText>
                <CardSubtitle tag="h4">{dog.age} years of old</CardSubtitle>
              </CardBody>
              <ListGroup>
                {dog.facts.map((dog, i) => (
                  <ListGroupItem key={i}>{dog}</ListGroupItem>
                ))}
              </ListGroup>
              <Button color="info" size="6">
                <Link to="/dogs">Go Back</Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DogDetail;
