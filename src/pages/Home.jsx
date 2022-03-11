import React from 'react';
import "./Home.css";
import Montage from "../assets/pics/montage.png"

function Home() {
  return (
    <div className="Home">
      <div className="homeLeft">
        <img className="homeImg" src={Montage} alt="montage with portrait"></img>
      </div>
      <div className="homeRight">
        <div className="homeTitle">Ich, Lucie</div>
        <div className="homeDesc">
          <p className="homeText">Une passionnée au service de votre dressing, pour trouver votre style.</p>
          <p className="homeText">Plus jeune je passais un temps fou à créer des styles, des articles, des tableaux de tendances, des associations improbables.</p>
          <p className="homeText">Aujourd'hui, rattrapée par une envie d'épure et de simplicité, je n'oublie pas mes premières amours.</p>
          <p className="homeText">Entre sportswear et couture, féminité et masculinité, matières techniques ou nobles, mes influences sont multiples.</p>
          <p className="homeText">Une seule obsession désormais, trouver la pièce parfaite, qui insufle du style à n'importe quel outfit, sans sacrifier votre identité.</p>
          <p className="homeText">Rester unique, à la fois intemporelle et bien dans son époque.</p>
        </div>
    </div>
    </div>
  )
}

export default Home;