import React, { Component } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./aPropos.css";
import Cover from "../../images/cover-about.png";

export default class APropos extends Component{

    render() {
        return (
            <div id="dropdown__bloc">
                <img id="cover__apropos" src={Cover} alt="cover a propos"/>
                
                <Dropdown name = "Fiabilité"
                description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />

                <Dropdown name = "Respect"
                description = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

                <Dropdown name = "Service"
                description = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />

                <Dropdown name = "Sécurité"
                description = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        )
    }
}