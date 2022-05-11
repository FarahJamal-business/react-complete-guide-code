import React from "react";
import Button from "./Button";
import Card from "./Card";

function Modal(props) {
  return (
    <div
      style={{
        "background-color": "red",
        padding: "2rem",
        width: "20%",
        "border-radius": "2rem",
      }}
    >
      <div onClick={props.onConfirm} />
      <Card>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;
