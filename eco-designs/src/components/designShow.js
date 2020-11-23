import React from 'react'
import { NavLink } from 'react-router-dom'
import CommentCard from './commentCard'
import { connect } from 'react-redux'
import { addDesignComment } from '../redux/actions'

class DesignShow extends React.Component{

    state= {
        clicked: false,
        comment: ""
    }

    renderComments = () =>{
        return this.props.design.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
    }

    changeHandler = (e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    localSubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.props.design.id, this.state.comment)
    }



    render(){

        let { main_img, title, img_1, img_2, img_3, img_4, img_5, img_6, description, category, user } = this.props.design
        console.log(this.state.comment)
        return(
            <div className="designCard">
                <img className="mainImage" src={main_img} alt="mainImg" />
            <h4>{title}</h4>
            <NavLink to={`/users/${this.props.design.user.id}`} >
                <h4>{user.name}</h4>
            </NavLink>
            <h3>{description}</h3>
            <h4>{category}</h4>
            <div className="designCardContainer">
                <div className="designCard">
                    <img className="mainImage" src={img_1} alt="mainImg" />
                    <img className="mainImage" src={img_2} alt="mainImg" />
                    <img className="mainImage" src={img_3} alt="mainImg" />
                    <img className="mainImage" src={img_4} alt="mainImg" />
                    <img className="mainImage" src={img_5} alt="mainImg" />
                    <img className="mainImage" src={img_6} alt="mainImg" />
                </div>
            </div>
            <h1>Comments</h1>
            {this.renderComments()}
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" value={this.state.comment} placeholder="Add Comment" onChange={this.changeHandler} />
                <button type="submit">Add Comment</button>
            </form>
         </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { submitHandler: (designId, comment) => dispatch(addDesignComment(designId, comment)) }
}

export default connect(null, mapDispatchToProps)(DesignShow)