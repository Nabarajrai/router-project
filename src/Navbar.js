import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DogList from "./DogList";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NabarToggle = ({ dogs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const resultDogs = dogs.map((dog) => (
    <NavItem>
      <NavLink className="nav-link" exact to={`/dogs/${dog.name}`}>
        {dog.name}
      </NavLink>
    </NavItem>
  ));

  return (
    <div>
      <Navbar dark expand="md" color="dark">
        <NavbarBrand href={DogList} style={{ marginLeft: "20px" }}>
          Dog App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/dogs">
                Home
              </NavLink>
            </NavItem>
            {resultDogs}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NabarToggle;
