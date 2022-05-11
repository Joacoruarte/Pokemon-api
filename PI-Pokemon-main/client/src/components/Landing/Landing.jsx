import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div id="fondo">
      <div className="containers">
        <h1 className="welcome">Find your favourite pokemon!</h1>
        <div id="img">
          <img
            src="https://i.etsystatic.com/27100843/r/il/b29bdb/3155470590/il_300x300.3155470590_91vy.jpg"
            alt="pikachu img"
          />
        </div>
        <Link id="link" to={"/home"}>
          <div>
            <button className="home">Ingresar</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
