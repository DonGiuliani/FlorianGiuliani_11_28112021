import "./Dropdown.css"

function Dropdown(props) {
    return (
        <details className="dropdown">
            <summary className="dropdown__title">{props.name}</summary>
            <div className="dropdown__text">
                    {props.description}
            </div>
        </details>
    )
}

export default Dropdown