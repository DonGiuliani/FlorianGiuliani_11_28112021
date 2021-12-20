import React, { Component } from "react";
import "./Footer.css"

export default class Footer extends Component{

    render() {
        return (
        <div id="footer">
            <p id="logo__footer">
                K
                <svg width="30" height="20" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.2658 20.4632L24.3497 7.67847L12.1945 0.637604L0.22345 21.5749L0.407616 41.2153L22.1396 54L24.3497 52.703V34.1744L34.1106 16.9428L44.0558 22.6866V41.2153L46.2658 39.9183V20.4632Z" fill="#FFFFFF"/>
                </svg>
                sa
            </p>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        )
    }
}