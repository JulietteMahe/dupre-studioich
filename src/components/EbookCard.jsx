import React from 'react';
import "./EbookCard.css";

const EbookCard = ({ebook}) => {
  return (
    <div className="EbookCard">
      <div className="ebookLeftContainer">
        <img className="ebookImg" src={ebook.mainpic} alt="image"></img>
      </div>
      <div className="ebookRightContainer">
        <div className="ebookTitleContainer">
          <h1 className="ebookTitle">{ebook.title}</h1>        
          <p className="ebookText">{ebook.price} €</p>
        </div>
        <p className="ebookText">{ebook.p1}</p>
        <p className="ebookText">{ebook.p2}</p>
        <p className="ebookText">{ebook.p3}</p>
        <p className="ebookText">{ebook.p4}</p>
        <div className="ebookButtonContainer">        
          <div className="ebookButton">Prendre mon ebook</div>
          <div className="ebookButton">Mode d'emploi</div>
        </div>
      </div>
    </div>
  )
}

export default EbookCard;