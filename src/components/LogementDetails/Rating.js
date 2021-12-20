import React from "react";
import StarFull from "../../images/starFull.svg";
import StarEmpty from "../../images/starEmpty.svg";

export default function Rating(props) {

    const ratings = Number(props.data);

    let stars = []

    for(let i = 0; i < 5; i++) {
        stars.push(<img src={StarEmpty} 
        key={i} alt={i} />)
    }

    for(let i = 0; i < ratings; i++) {
        stars.splice(i, 1, <img src={StarFull}
        key={i} alt={i}/>)
    }

    return (
        <div>
            {stars}
        </div>
    )
}