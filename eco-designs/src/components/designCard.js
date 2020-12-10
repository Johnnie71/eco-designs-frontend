import React from 'react'
import { NavLink } from 'react-router-dom'

class DesignCard extends React.Component{

    state= {
        clicked: false
    }

    clickHandler = (e) =>{
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    render(){

        let { main_img, title } = this.props.design

        return(
            <div>
                <NavLink to={`/users/${this.props.design.user.id}`} >
                    <h4 className="userNameDesignCard">{this.props.design.user.username}</h4>
                </NavLink>
                <div className="designCard">
                   <NavLink to={`/designs/${this.props.design.id}`}>
                            <img className="mainImage" src={main_img} alt="mainImg" onClick={this.clickHandler}/>
                   </NavLink>
                    <h4 className="designCardTitle">{title}</h4>
                </div>
            </div>
        )
    }


}


export default DesignCard