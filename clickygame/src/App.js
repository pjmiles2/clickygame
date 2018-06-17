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

    checkImage = id => {
        const images = this.state.images.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ images });

      };

render() {
  return (
    <div>
    <Navbar />
    <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
    </Jumbotron>
    <Wrapper>
        {this.state.images.map(image => (
          <Card
            checkImage={this.checkImage}
            id={image.id}
            key={image.id}
            image={image.image}
            name={image.name}
            checked={image.checked}
          />
        ))}
    </Wrapper>
    </div>
  );

}
}
export default App;