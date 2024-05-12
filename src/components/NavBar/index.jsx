import { NavLink } from "react-router-dom"

import "./style.css"

const NavBar = ({ links }) => {
    return (
        <nav>
            <ul className="navLinks">
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={link.path}>{link.name.toUpperCase()}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar