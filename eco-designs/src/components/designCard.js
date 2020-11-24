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
            
                <div className="designCard">
                   <NavLink to={`/designs/${this.props.design.id}`}>
                            <img className="mainImage" src={main_img} alt="mainImg" onClick={this.clickHandler}/>
                   </NavLink>
                    <h4>{title}</h4>
                </div>
        )
    }


}


export default DesignCard