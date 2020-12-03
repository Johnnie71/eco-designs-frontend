import React from 'react'
import { NavLink } from 'react-router-dom'
import CommentCard from './commentCard'
import { connect } from 'react-redux'
import { addDesignComment } from '../redux/actions'

class DesignShow extends React.Component{

    state = {
        user_id: 9, 
        design_id: this.props.design.id,
        clicked: false,
        comment: "",
    }

    renderComments = () => {
        //filters out the comments based on which design its under
        let designComments = this.props.comments.filter(comment => comment.design_id === this.props.design.id )
        console.log(designComments)
        return designComments.map(comment => <CommentCard key={comment.id} comment={comment} />)
    }

    changeHandler = (e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    localSubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.state.user_id, this.state.design_id, this.state.comment)
        this.setState({comment: ""})
    }



    render(){

        let { main_img, title, img_1, img_2, img_3, img_4, img_5, img_6, description, user } = this.props.design
        // console.log(this.state.comment)
        return(
            <div className="designshow">
                <div className="mainimagecontainer">
                    <img className="mainImage" src={main_img} alt="mainImg" />
                </div>
                <div className="designInfoContainer">
                    <h3 className="titleheader">Title:</h3>
                    <h4 className="title">{title}</h4>
                    <h3 className="designerheader">Designer:</h3>
                        <NavLink to={`/users/${this.props.design.user.id}`} >
                            <h4 className="designer">{user.username}</h4>
                        </NavLink>
                        <h3 className="descriptionHeader">Description:</h3>
                            <h3 className="description">{description}</h3>
                </div>
                    
            <div className="designCardContainer">
                <div className="gallery">
                    <img className="altImage" src={img_1} alt="mainImg" />
                </div>
                <div className="gallery">
                    <img className="altImage" src={img_2} alt="mainImg" />
                </div>
                <div className="gallery">
                    <img className="altImage" src={img_3} alt="mainImg" />
                </div>
                <div className="gallery">
                    <img className="altImage" src={img_4} alt="mainImg" />
                </div>
                <div className="gallery">
                    <img className="altImage" src={img_5} alt="mainImg" />
                </div>
                <div className="gallery">
                    <img className="altImage" src={img_6} alt="mainImg" />
                </div>
            </div>
                <h1 className="commentsHeader">Comments</h1>
                <div className="commentContainer">
                    {this.renderComments()}
                </div>
                <div>
                    <form onSubmit={this.localSubmitHandler}>
                        <input type="text" value={this.state.comment} placeholder="Add Comment" onChange={this.changeHandler} />
                        <button className="glow-on-hover-addCommentButton" type="submit">Add Comment</button>
                    </form>
                </div>
         </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { submitHandler: (userId, designId, comment) => dispatch(addDesignComment(userId, designId, comment)) }
}

function mapStateToProps(state){
    return {comments: state.comments}
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignShow)