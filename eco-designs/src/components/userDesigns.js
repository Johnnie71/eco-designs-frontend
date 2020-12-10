import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteDesignAction } from '../redux/actions'


class UserDesigns extends React.Component{



    localDeleteHandler =(e)=>{
        this.props.deleteHandler(this.props.design.id)
    }


    render(){
        let { title, main_img } = this.props.design
        // console.log(this.props.user.id, this.props.design.id)
        return(
            <div className="designcardcontainer">  
                 <div className="designCard">
                    <NavLink to={`/designs/${this.props.design.id}`} >
                        <img className="mainImage" src={main_img} alt="mainimg" />
                    </NavLink>
                 </div>
                    <h2 className="designCardTitle" >{title}</h2>
                    {this.props.deleteButtonClicked ? 
                        <button className="glow-on-hover-x" onClick={this.localDeleteHandler}>X</button>
                        :
                        null
                     }
                    {/* {this.props.design.user.id === 32 ? <button className="glow-on-hover-x" onClick={this.localDeleteHandler}>X</button> : null} */}
                    {/* <button className="glow-on-hover-x"  onClick={this.localDeleteHandler}>X</button> */}
            </div>
        )
    } 
}

function mapDispatchToProps(dispatch){
    return { deleteHandler: (designId) => dispatch(deleteDesignAction(designId)) }
}

export default connect(null, mapDispatchToProps)(UserDesigns)