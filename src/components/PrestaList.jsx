import React from 'react';
import "./PrestaList.css";

const PrestaList = ({presta}) => {
  return (
    <div className="PrestaList">
      <div className="prestaLeftContainer">
        <img className="prestaImg" src={presta.mainpic} alt="image"></img>
      </div>
      <div className="prestaRightContainer">
        <div className="prestaTitleContainer">
          <h1 className="prestaTitle">{presta.title}</h1>        
          <p className="prestaText">{presta.price} €</p>
        </div>
        <p className="prestaText">{presta.p1}</p>
        <p className="prestaText">{presta.p2}</p>
        <p className="prestaText">{presta.p3}</p>
        <p className="prestaText">{presta.p4}</p>
        <div className="prestaButtonContainer">        
          <div className="prestaButton">Réserver ma prestation</div>
          <div className="prestaButton">Mode d'emploi</div>
        </div>
      </div>
    </div>
  )
}

export default PrestaList;