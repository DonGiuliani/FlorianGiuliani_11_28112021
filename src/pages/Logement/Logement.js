import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Caroussel from "../../components/Caroussel/Caroussel";
import LogementDetails from "../../components/LogementDetails/LogementDetails";
import "./Logement.css";
import Data from "../Accueil/data.json";

export default class Logement extends Component {
    constructor(props) {
        super(props);
        this.appartement = getLogementById(props.match.params.id)
    }

    render() {
        if (this.appartement === null) return  <Redirect to="/404" />
        return (
            <div>
                <Caroussel pictures={this.appartement.pictures}/>
                <LogementDetails data={this.appartement} />
                <div id="dropdowns">
                    <Dropdown
                    name="Description"
                    description={this.appartement.description} />

                    <Dropdown
                    name="Équipements"
                    description={this.appartement.equipments.map((equipment) => (
                        <span className="equipment"
                        key={equipment}>
                            {equipment}
                        </span>
                    ))} />
                </div>
            </div>
        )
    }
}

function getLogementById(id){
    for(const logement of Data){
        if (logement.id === id) {
            return logement
        }
    }
    return null;
}