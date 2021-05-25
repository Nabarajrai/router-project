import "./App.css";
import Wiskey from "./images/1.jpg";
import Hazel from "./images/2.jpg";
import Tubby from "./images/3.jpg";
import Panda from "./images/4.jpg";
import Router from "./Route";
import Navbar from "./Navbar";
function App() {
  const dogs = [
    {
      name: "Wiskey",
      age: 5,
      src: Wiskey,
      facts: [
        "Wiskey loves eating popcorn",
        "Wiskey is a terrible guard dog",
        "Wiskey is wants to be cuddle with you",
      ],
    },
    {
      name: "Hazel",
      age: 5,
      src: Hazel,
      facts: [
        "Hazel loves eating popcorn",
        "Hazel is a terrible guard dog",
        "Hazelis wants to be cuddle with you",
      ],
    },
    {
      name: "Tubby",
      age: 9,
      src: Tubby,
      facts: [
        "Tubby loves eating popcorn",
        "Tubby is a terrible guard dog",
        "Tubby is wants to be cuddle with you",
      ],
    },
    {
      name: "Panda",
      age: 6,
      src: Panda,
      facts: [
        "Panda loves eating popcorn",
        "Panda is a terrible guard dog",
        "Panda is wants to be cuddle with you",
      ],
    },
  ];

  return (
    <div className="App">
      <Navbar dogs={dogs} />
      <Router dogs={dogs} />
    </div>
  );
}

export default App;
