import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Click Game</h1>
          <span className="lead">Board shuffles once you click a resort. Dont click the same image twice.</span>  <span>Consecutive Clicks: </span> <span>High Score: </span>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
