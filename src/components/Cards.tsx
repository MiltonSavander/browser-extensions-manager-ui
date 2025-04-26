import React from "react";
import Card from "./Card";
import extensionsData from "../../data.json";

function Cards() {
  return (
    <div className="cards">
      {extensionsData.map((extension, index) => (
        <Card key={index} name={extension.name} description={extension.description} logo={extension.logo} isActive={extension.isActive} />
      ))}
    </div>
  );
}

export default Cards;
