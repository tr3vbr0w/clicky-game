import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Jumbo = ({score, highScore, message}) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Click Game</h1>
          <p className="lead">Board shuffles once you click a resort. Dont click the same image twice.</p>  
          <p>Consecutive Clicks: {score}</p> 
          <p>High Score: {highScore} </p>
          <p>{message} </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
