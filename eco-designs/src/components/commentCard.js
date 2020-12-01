import React from 'react'
import { connect } from 'react-redux'
import { deleteDesignComment } from '../redux/actions'
import { NavLink } from 'react-router-dom'

class CommentCard extends React.Component{


    localDeleteHandler = (e) =>{
        this.props.deleteHandler(this.props.comment.id)
    }

    render(){
        console.log(this.props.comment.id)
        return(
            <div>
                <NavLink to={`/users/${this.props.comment.user.id}`} >
                <strong>{this.props.comment.user.username}</strong>
                </NavLink>
                <h4>{this.props.comment.comment}</h4>
                {this.props.comment.user.id === 34 ? <button onClick={this.localDeleteHandler}>Delete</button> : null }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { deleteHandler: (commentId) => dispatch(deleteDesignComment(commentId)) }
}


export default connect(null, mapDispatchToProps)(CommentCard)