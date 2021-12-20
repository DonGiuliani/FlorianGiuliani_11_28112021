import React from "react";
import Tags from "./Tags";
import "./LogementDetails.css"
import Rating from "./Rating";

export default function LogementDetails(props) {

    return (
        <div id="logement">
            <div id="logement__details">
                <h1 id="logement__title">
                    {props.data.title}
                </h1>
                <p id="logement__location">
                    {props.data.location}
                </p>

                <div id="tags">
                    <Tags data={props.data.tags} />
                </div>
            </div>

            <div id="host">
                <div id="host__ratings">
                    <Rating data={props.data.rating} />
                </div>
                
                <div id="host__details">
                    <p id="host__name">
                        {props.data.host.name}
                    </p>
                    <img id="host__picture"
                        src={props.data.host.picture}
                        alt={props.data.host.picture} />
                </div>
            </div>
        </div>
    )
}