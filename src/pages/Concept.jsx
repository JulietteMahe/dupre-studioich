import React from 'react';
import { Link } from "react-router-dom";
import "./Concept.css";

function Concept() {
  return (
    <div className="Concept">
      <div className="conceptLeft">
        <img className="conceptImg" src="https://i.ibb.co/7CLxhy9/concept.jpg" alt="elegant legs"></img>
      </div>
      <div className="conceptRight">
        <div className="pageTitle">Le concept</div>
        <div className="pageDesc">
          <p className="pageText">Vos semaines de looks ressemblent à des jours sans fins, répétitifs et sans grande fantaisie. Vous jouez la carte de la facilité, un vestiaire sans prise de risque. Vous voulez affirmer votre style et cultiver votre personnalité? Aller à l’essentiel sans oublier d’être élégante en soignant les accessoires? Vous voulez parler du tee qui vieillit bien, de hoodies qui sentent la fleur de coton, de la tarte aux pommes de Martine, de mode eco-responsable et durable?</p>
          <p className="pageText">Inutile de réviser votre table des matières, de sortir vos cahiers et de prendre des notes, on prend son smartphone, on fait un screen, de l’influence marketing à l’hybridation des formats, la tendance digital a le vent en poupe. Nous n’avons rien inventé mais nous nous sommes laissés influencer.</p>
          <p className="pageText">Le concept ebook : un sujet abordé, des conseils, des inspirations, découverte de créateurs, de l’histoire, du shopping… parfois de dinde au four, de yoga ou de Botox mais ça c’est pour la légèreté.</p>
          <p className="pageText">Les prestations : des sessions e-styling via zoom ou des sessions at home, une méthode pour avoir un dressing cool & conscient, un stylisme sur mesure et une interaction privilégiée, toutes vos demandes personnalisées et sur mesure avec toujours cette idée en tête, révéler votre style pour retrouver la joie de s’habiller et cultiver le self-estime.</p>
          <p className="pageText">UNE SEULE CHOSE A FAIRE APRES VOTRE ACHAT, LAISSEZ-VOUS GUIDER PAR L’EQUIPE STUDIOICH.</p>
          <p className="pageText">A TRÈS VITE AUTOUR D’UN CAFÉ</p>
        </div>
        <Link to="/prestations" className="conceptButtonContainer" >
        <div className="pageButton">Réserver une prestation</div>
        </Link>
      </div>
        
        
    </div>
  )
}

export default Concept;