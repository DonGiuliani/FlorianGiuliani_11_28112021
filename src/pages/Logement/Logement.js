import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Caroussel from "../../components/Caroussel/Caroussel";
import LogementDetails from "../../components/LogementDetails/LogementDetails";
import { useParams } from "react-router-dom";
import "./Logement.css";
import {getAppartement} from "../../services/dataManager"

export default function Logement () {

    const {id} = useParams();
    const [appartement, setAppart] = useState("loading");
    useEffect(async ()=>{
        if (appartement !== "loading") return;
        setAppart(await getAppartement(id));
    });

    if (appartement === null) return  <Navigate to="/404" />
    return (
        appartement ==="loading" ? "loading" : 
        <div>
            <Caroussel pictures={appartement.pictures}/>
            <LogementDetails data={appartement} />
            <div id="dropdowns">
                <Dropdown
                name="Description"
                description={appartement.description} />

                <Dropdown
                name="Équipements"
                description={appartement.equipments.map((equipment) => (
                    <span className="equipment"
                    key={equipment}>
                        {equipment}
                    </span>
                ))} />
            </div>
        </div>
    )
}