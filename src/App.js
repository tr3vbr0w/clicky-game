import React, { Component } from "react";
import Jumbo from "./components/Jumbotron";
import ResortCard from "./components/ResortCard";
import resorts from "./resorts.json"
import Wrapper from "./components/Wrapper"

//Seperate to be global. Available to all components

let shuffleResorts = (arr) => {
  for (let i = arr.length -1; i > 0; i--) {
    // Randomized placement of array components effectively mixes them all up each time this function is called
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {
  state = {
    resorts,
    score: 0,
    highScore: 0, 
    isClicked: false,
    clickedResorts : []
  };

  handleScoreIncrement = () => {
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })
    console.log("Score: "+this.state.score)
    console.log("High Score: "+this.state.highScore)
  }
  //Shuffle Card Handler
  handleShuffle = () => {
    let shuffledResorts = shuffleResorts(resorts);
    this.setState({
      resorts: shuffledResorts
    })
  }

  gameOver = () => {
    let shuffledResorts = shuffleResorts(resorts);
    let newHighScore = (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore;
    this.setState({
      highScore: newHighScore,
      score: 0,
      resorts: shuffledResorts,
      clickedResorts: []
    })
  
  }


  //Click handler for selecting a resort logo.
  handleClick = id => {
    if(this.state.clickedResorts.indexOf(id) === -1) {
      this.setState({
        //.concat will push the index passed through onClick into the clickedResorts array
        clickedResorts : this.state.clickedResorts.concat(id),

      })
      this.handleScoreIncrement();
      this.handleShuffle(resorts);
      console.log(this.state.clickedResorts)
    } else {
      this.gameOver()
    }

  }


  render() {
    return (
      <>
      {/* Rendering components in the app.js file */}
      <Jumbo score={this.state.score} highScore={this.state.highScore}>Resorts List</Jumbo>
      <Wrapper>
        {this.state.resorts.map(resort => (
          <ResortCard
          //This is where you assign each button their properties 
            removeResort={this.removeResort}
            id={resort.id}
            key = {resort.id}
            name={resort.name}
            image={resort.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </>
    );
  }
};

export default App;