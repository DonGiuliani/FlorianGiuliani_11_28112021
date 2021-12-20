import React from "react";
import { Link } from "react-router-dom";
import "./Appartement.css";
import Cover from "../../images/cover-home.png";
import Data from "../../pages/Accueil/data.json";

function Appartement() {
    const appartements = Data;
    return (
        <div id="index__page">
            <img id="cover__index" src={Cover} alt="cover index"/>
            <p id="text__index">
                Chez vous, partout et ailleurs
            </p>
            <div id="articles">
            {
            appartements.map((appartement) => (
                <li className="article__li" key={appartement.id}>
                    <Link style={{textDecoration: "none"}} to={`/logement/${appartement.id}`}>
                        <div className="article">
                            <img className="article__cover" src={appartement.cover} alt={appartement.title} />
                            <h1 className="article__title">{appartement.title}</h1>
                        </div>
                    </Link>
                </li>))
            }
            </div>
        </div>
    )
}

export default Appartement