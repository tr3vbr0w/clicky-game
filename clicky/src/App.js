import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ResortCard from "./components/ResortCard";
import resorts from "./resorts.json"
import Wrapper from "./components/Wrapper";
// import Card from "./components/Card";

class App extends Component {
  state = {
    resorts,
    score: 0,
    clicked: false,
  };

  // //Render the image component for each resort
  removeResorts = id => {
    // Filter this.state.resorts for resorts with an id not equal to the id being removed
    const resorts = this.state.resorts.filter(resorts => resorts.id !== id);
    // Set this.state.resorts equal to the new resorts array
    this.setState({ resorts });
  };

  render() {
    return (
      
      <Wrapper>
        <Jumbotron>Resorts List</Jumbotron>
        {this.state.resorts.map(resort => (
          <ResortCard
            removeResort={this.removeResort}
            id={resort.id}
            key={resort.id}
            name={resort.name}
            image={resort.image}
            
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;