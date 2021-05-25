import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
const Router = ({ dogs }) => {
  const getDog = (props) => {
    let name = props.match.params.name;
    let currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    console.log(currentDog);
    return <DogDetail {...props} dog={currentDog} />;
  };
  return (
    <Switch>
      <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
      <Route exact path="/dogs/:name" render={getDog} />
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Router;
