import React from "react";
import Card from "../components/Card";
import { Products } from "../data/products";
import "./home-page.scss";

function HomePage() {
  return (
    <div className="flex">
      {Products.map(({ imgURL, title, cost }) => (
        <Card key={imgURL} src={imgURL} title={title} cost={cost} />
      ))}
    </div>
  );
}

export default HomePage;
