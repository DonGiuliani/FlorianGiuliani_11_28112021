import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Banner.css"

export default class Banner extends Component{

    render() {
        return (
        <div id="banner">
            <div id="logo__banner">
                <Link style={{textDecoration: "none"}} to="/">
                    <h1 id="logo">
                        K
                        <svg width="50" height="40" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.2658 20.4632L24.3497 7.67847L12.1945 0.637604L0.22345 21.5749L0.407616 41.2153L22.1396 54L24.3497 52.703V34.1744L34.1106 16.9428L44.0558 22.6866V41.2153L46.2658 39.9183V20.4632Z" fill="#FF6060"/>
                        </svg>
                        sa
                    </h1>
                </Link>
            </div>
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