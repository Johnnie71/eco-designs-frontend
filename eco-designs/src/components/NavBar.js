import React from 'react'
import {MenuItems} from './MenuItems'

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbaritems">
                <h4 className="navbar-logo">-</h4>
                <div className="menu-icons">-</div>
                <h1 className="npbp">Eco Designs</h1>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className= "navbarlis" key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar