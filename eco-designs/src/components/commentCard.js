import React from 'react'

class CommentCard extends React.Component{

    render(){
        console.log(this.props.comment.comment)
        return(
            <h4>{this.props.comment.comment}</h4>
        )
    }
}

export default CommentCard