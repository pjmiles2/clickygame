import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Jumbotron from "./components/Jumbotron/Jumbotron";

const App = () => (
<div>
<Navbar />
<Jumbotron>
    <h1>Clicky Game!</h1>
    <p>Click on an image to earn points, but don't click on any more than once!</p>;
</Jumbotron>
</div>
);
export default App;
