import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <h1>
        {props.title}. {props.name}
      </h1>
      <h3>{props.gender}</h3>
      <h3>Country: {props.country}</h3>
      <p>{props.email}</p>
    </div>
  );
}
