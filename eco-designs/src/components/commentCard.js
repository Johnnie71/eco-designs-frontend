import React from 'react'
import { connect } from 'react-redux'
import { deleteDesignComment } from '../redux/actions'

class CommentCard extends React.Component{


    localDeleteHandler = (e) =>{
        this.props.deleteHandler(this.props.comment.id)
    }

    render(){
        console.log(this.props.comment.id)
        return(
            <div>
                <h4>{this.props.comment.comment}<button onClick={this.localDeleteHandler}>Delete</button></h4>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { deleteHandler: (commentId) => dispatch(deleteDesignComment(commentId)) }
}


export default connect(null, mapDispatchToProps)(CommentCard)