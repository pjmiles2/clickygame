import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper";
import images from "./images.json";

class App extends Component {
    state = {
      images,
      score: 0,
      topScore: 0,
      idArray: [],
    };
  
  endGame = () => {
  alert("GAME OVER!");
  let startOver = {
    score: 0,
    topScore: 0,
    idArray: []
  };
  
  this.setState(startOver);
  console.log("startOver", startOver);
  };
  
  randomize= () => {
  images.sort(function(a, b){return 0.5 - Math.random()});
  };
  
  checkImage= id => {
  
    let newState = { ...this.state };
    console.log("newState", newState);
  
    const newArray = this.state.idArray;
    console.log("newArray", newArray);
  

    newArray.includes(id)
      ? this.endGame()
  
      : newArray.push(id);
      
      newState = {
      score: this.state.score + 1,
      topScore: this.state.topScore + 1,
        }   
  
      this.setState(newState);
      console.log("newState", newState);
      this.randomize();
     
    } 

render() {
  return (
    <div>
    <Navbar />
    <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        <p>Score: {this.state.score}</p>
        <p>Top Score: {this.state.topScore}</p>
    </Jumbotron>
    <Wrapper>
        {this.state.images.map(image => (
          <Card
            id={image.id}
            key={image.id}
            image={image.image}
            name={image.name}
            checked={image.checked}
            checkImage={this.checkImage} 
          />
        ))}
    </Wrapper>
    </div>
  );

}
}
export default App;