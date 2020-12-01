import React from 'react'
import {MenuItems} from './MenuItems'

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbaritems">
                <h1>Eco Share</h1>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className= "navbarlist" key={index}>
                                <a class="btn-mix" data-text={item.title} href={item.url}>
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