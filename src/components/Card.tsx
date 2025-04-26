import React from "react";

function Card() {
  return (
    <div className="cardContainer">
      <div className="upperContainer">
        <img src="./assets/images/logo-devlens.svg" alt="logo-devlens" />
        <div className="innerContaier">
          <h2>DevLens</h2>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
