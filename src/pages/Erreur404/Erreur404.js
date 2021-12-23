import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Erreur404.css";

export default class Erreur404 extends Component {

    render() {
        return (
            <div id="erreur404">
                <h1 id="title404">404</h1>
                <p id="oups">Oups! La page que vous demandez n'existe pas.</p>
                <Link style={{textDecoration: "none"}} to="/">
                    <p id="return">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        )
    }
}