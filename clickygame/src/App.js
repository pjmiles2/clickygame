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
      status: ""
    };
 

  resetGame = () => {
    this.topScore();
    this.setState({score: 0, idArray:[]});

  };
  
  
  
  randomize= () => {
  images.sort(function(a, b){return 0.5 - Math.random()});
  };
  
  checkImage= id => {
  
    let newState = { ...this.state };
    console.log("newState", newState);
  
    const newArray = this.state.idArray;
    console.log("newArray", newArray);
  

    if (newArray.includes(id)){
      this.resetGame()
      this.setState({status: "Game Over. Click any image to try again!"})

  
    } else { newArray.push(id);
      this.setState({score: this.state.score + 1});    
      this.setState({status: "You Guessed Correctly!"})

      this.randomize();
    } 
  };

    topScore = () =>{
        if(this.state.score > this.state.topScore){
          this.setState({topScore:this.state.score, score: 0})
        } else {this.setState({score: 0})}
    

      }


render() {
  return (
    <div>
    <Navbar>
      <p>Clicky Game!</p>
      <p className="score">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
      <p className="status">{this.state.status}</p>
    </Navbar>
    <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
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