import React from "react";
import "./Tags.css";

export default function Tags(props) {

    const tags = props.data;

    return (
        tags.map((tag) => (
            <div className="tag" key={tag}>
                {tag}
            </div>
        ))
    )
}