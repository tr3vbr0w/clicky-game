import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import ResortCard from "./components/ResortCard";
import resorts from "./resorts.json"
import Wrapper from "./components/Wrapper"

//Seperate to be global. Available to all components

function shuffleResorts(arr) {
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
    isClicked: false,
    clickedResorts : []
  };

  handleScoreIncrement = () => {
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })
    
  }
  //Shuffle Card Handler
  handleShuffle = () => {
    let shuffledResorts = shuffleResorts(resorts);
    this.setState({
      resorts: shuffledResorts
    })
  }

  gameOver = () => {
    this.setState({
      score: 0,
      resorts: this.shuffleResorts(resorts),
      clickedResorts: []
    })
  }


  //Click handler for selecting a resort logo.
  handleClick = id => {
    console.log(id);
    if(this.state.clickedResorts.indexOf(id) === -1) {
      this.setState({
        //.concat will push the index passed through onClick into the clickedResorts array
        clickedResorts : this.state.clickedResorts.concat(id),

      })
      this.handleShuffle(resorts)
    } else {
      this.gameOver()

    }
    
    //Increment the score
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });

    // const resortId = event.target.id;
    // console.log(resortId);
    
  }

  



  //Fischer/Yates shuffle algorithm. Found on Medium
  // shuffle = array => {
  //   let currentIndex = array.length;

  //   while (0 !== currentIndex) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     let tempValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = tempValue;
  //   }
  //   // set characters to shuffled resorts array

  //   this.setState({ resorts: resorts });
  // };

  render() {
    return (
      <>
      {/* Rendering components in the app.js file */}
      <Jumbotron>Resorts List</Jumbotron>
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