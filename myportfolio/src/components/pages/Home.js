import React from "react";
import "../../styles/styles/styles.css";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    verticalAlign: "center",
    transform: "translateY(60%)",
  },
  name: {
    color: "#000065",
    fontSize: "50px",
    fontFamily: "cursive",
  },
  description: {
    paddingTop: "25px",
    paddingRight: "30px",
    color: "#000075",
    fontSize: "14px",
    fontFamily: "Lucida Console",
  },
};

export default function Home() {
  return (
    <div className="homeanimation">
      <div className="mountain"></div>
      <div className="cloud"></div>
      <div className="cloud2"></div>
      <div style={styles.main}>
        <h1 style={styles.name}>I'm Caleb</h1>
        <p style={styles.description}>a Full Stack Developer.</p>
        <img className="skyline" />
      </div>
    </div>
  );
}
