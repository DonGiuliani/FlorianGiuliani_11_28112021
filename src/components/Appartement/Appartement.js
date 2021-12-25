import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Appartement.css";
import Cover from "../../images/cover-home.png";
import {getAllData} from "../../services/dataManager"
import react from "react";

function Appartement() {
    const [appartements, setApparts] = useState(null);
    const bg = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${Cover})`
    useEffect(async ()=>{
        if (appartements !== null) return;
        setApparts(await getAllData());
    })
    return (
        <div id="index__page">
            <div id="cover" style={{ background: bg }}>
                 Chez vous, partout et ailleurs
            </div>
            <div id="articles">
            { appartements === null ? "loading" : 
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