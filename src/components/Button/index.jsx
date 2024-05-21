import "./style.css"

const Button = ({title, white}) => {

    return (
        <button className={`button ${white ? "button-white" : "button-yellow"}`}>
            {title}
        </button>
    )
}

export default Button