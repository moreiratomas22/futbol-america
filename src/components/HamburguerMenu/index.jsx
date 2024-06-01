import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

import "./style.css"

const HamburguerMenu = ({ links }) => {
    return (
        <div className='hamburguerMenu'>
        <Menu right noOverlay id={ "sidebar" } >
            <ul>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={link.path}>{link.name.toUpperCase()}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </Menu>
        </div>
    )
}

export default HamburguerMenu