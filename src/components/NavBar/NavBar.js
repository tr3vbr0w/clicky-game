import React from "react";
import { Navbar } from 'reactstrap';

import "./style.css";



const styles = {
  card: {
    margin: 0,
    background: "#e8eaf6",
    display: "flex",
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    align: "right"

  }
};

const Nav = ({score, highScore}) => {
  return (
    <Navbar>
      <div style={styles.card}>
        <div style={styles.heading}>Click Game</div>
        <div style={styles.heading}>Score: {score}</div>
        <div style={styles.heading}>High Score: {highScore}</div>
      </div>
    </Navbar>
  );
}

export default Nav;