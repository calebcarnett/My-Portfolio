import React from "react";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
    fontFamily: "Lucida Console",
  },
};

export default function Home() {
  return (
    <div style={styles.main}>
      <h1 style={styles.name}>I'm Caleb</h1>
      <p style={styles.description}>a Full Stack Developer,</p>
    </div>
  );
}
