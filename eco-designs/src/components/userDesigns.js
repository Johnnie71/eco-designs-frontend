import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteDesignAction } from '../redux/actions'


class UserDesigns extends React.Component{



    localDeleteHandler =(e)=>{
        this.props.deleteHandler(this.props.user.id, this.props.design.id)
    }


    render(){
        let { title, main_img } = this.props.design
        console.log(this.props.user.id, this.props.design.id)
        return(
            <div>  
                 <div className="designCard">
                    <NavLink to={`/designs/${this.props.design.id}`} >
                        <img className="mainImage" src={main_img} alt="mainimg" />
                    </NavLink>
                 </div>
                    <h2>{title}</h2>
                    <button onClick={this.localDeleteHandler}>X</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { deleteHandler: (userId, designId) => dispatch(deleteDesignAction(userId, designId)) }
}

export default connect(null, mapDispatchToProps)(UserDesigns)