import { Link } from "react-router-dom"

import { DropDown, HamburguerMenu, NavBar } from "../../components"

import "./style.css"

const Header = ({ links }) => {
    return (
        <header className="header">
            <div>
                <h1 className="title"><Link to="/"><span className="yellowColor">FUTBOL</span> AMERICA</Link></h1>
            </div>
            <div className="navOptions">
                <DropDown />
                <NavBar links={links} />
                <HamburguerMenu links={links}/>
            </div>
        </header>
    )
}

export default Header