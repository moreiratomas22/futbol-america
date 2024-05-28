import { Link } from "react-router-dom"
import "./style.css"

const Button = ({ title, white, toLink }) => {

    return (
        <Link to={toLink}>
            <button className={`button ${white ? "button-white" : "button-yellow"}`}>
                {title}
            </button>
        </Link>
    )
}

export default Button