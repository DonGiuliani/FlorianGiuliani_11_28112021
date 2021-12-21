import React, { Component } from "react";
import {Link} from "react-router-dom";
import Logo from "../../images/Vector.svg"
import "./Banner.css"

export default class Banner extends Component{

    render() {
        return (
        <div id="banner">
            <Link style={{textDecoration: "none"}} to="/">
                <h1 id="logo">
                    K
                    <img src={Logo} alt={Logo} id="logo__image"/>
                    sa
                </h1>
            </Link>
            <ul id="links">
                <li className="link">
                    <Link style={{textDecoration: "none"}} to="/">
                        <p className="link__name">
                            Accueil
                        </p>
                    </Link>
                </li>
                <li className="link">
                    <Link style={{textDecoration: "none"}} to="/a-propos">
                        <p className="link__name">
                            A propos
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
}