import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {
    return (
        <nav>
            <h1>
                <i className={icon}>{title}</i>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Help'>Help</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
