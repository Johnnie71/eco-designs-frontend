import React from 'react'
import UserDesigns from './userDesigns'
import EditProfile from './editProfile'
import DesignForm from './designForm'
import { connect } from 'react-redux'
import { deleteFollowAction, addFollowAction } from '../redux/actions'

// import { deleteUserAction } from '../redux/actions'

class UserShow extends React.Component{

    state = {
        // followedBy: this.props.follows.filter(follow => follow.followed_id === this.props.user.id),
        clicked: false,
        designClicked: false,
        name: this.props.user.name,
        username: this.props.user.username,
        profile_pic: this.props.user.profile_pic,
        bio: this.props.user.bio,
        password_digest: this.props.user.password_digest
    }

    userDesigns = () =>{
        let userdesigns = this.props.designs.filter(design => design.user.id === this.props.user.id)
        // console.log(userdesigns)
        // return this.props.user.designs.map(design => <UserDesigns key={design.id} design={design} user={this.props.user} />)
        return userdesigns.map(design => <UserDesigns key={design.id} design={design} user={this.props.user} />)
    
    }

    clickHandler = (e) =>{
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    designClickHandler = () =>{
        this.setState(previousState => ({
            designClicked: !previousState.designClicked
        }))
    }

    
    localsubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.props.user.id, this.state.name, this.state.username, this.state.profile_pic, this.state.bio, this.state.password_digest)
    }
    
    doesUserFollow = () => {
        let filteredFollows = this.props.follows.filter(follow => follow.followed_id === this.props.user.id)
        //checks to see if the selected user profile is followed by user with id of 34..returns true or false
        return filteredFollows.map(follow => follow.following_id).includes(34)
        // console.log(this.state.followedBy)
    }

    following = () => {
        //filters out the array of total follows from the db that match the user of the profile's id to find their followers.
        return this.props.follows.filter(user => user.following_id === this.props.user.id)
    }

    followers = () => {
        //filters out the array of totoal follows from the db that match the user profile id to find who they are following.
        return this.props.follows.filter(user => user.followed_id === this.props.user.id)
    }

    addFollower = () => {
        this.props.addFollowHandler(this.props.user.id)
        // console.log(this.props.user.id)
    }

    localDeleteFollow = () => {
        let followId = this.props.follows.filter(follow => follow.following_id === 34 && follow.followed_id === this.props.user.id)[0].id
        // let followingId = followId.following_id
        // let followedId = followId.followed_id
        // console.log(followingId, followedId)
       
        this.props.deleteFollowHandler(followId)
    }



    render(){
        console.log(this.props.follows)
        // console.log(this.state.followedBy)
        // console.log(this.state.followedBy.map(follow => follow.following_id).includes(34))
        console.log(this.doesUserFollow())
        let { name, bio, profile_pic} = this.props.user
        return(
            <div>
                <h1>User Card</h1>
                
                    <h1>{name}</h1>
                    <strong>Bio:</strong>
                    <h4>{bio}</h4>
                 <div className="usercard">
                    <img className="profileImg" src={profile_pic} alt="profileimg"/>
                 </div>
                <h4>Following</h4>
                {/* <h4>{isFollowing.length}</h4> */}
                <h4>{this.following().length}</h4>
                <h4>Followers</h4>
                {/* <h4>{isFollowedBy.length}</h4> */}
                <h4>{this.followers().length}</h4>
                  {this.doesUserFollow() ? <button onClick={this.localDeleteFollow}>Unfollow</button> : <button onClick={this.addFollower}>Follow</button>} 
                  
                    {this.state.clicked ? <button onClick={this.clickHandler}>Done</button> : <button onClick={this.clickHandler}>Edit Profile</button>}
                    {this.state.designClicked ? <button onClick={this.designClickHandler}>Done</button> : <button onClick={this.designClickHandler}>Add Design</button>}
                    {this.state.clicked ? <EditProfile user={this.props.user} /> : null }
                    {this.state.designClicked ? <DesignForm user={this.props.user}/> : null}
                    <h1>My Designs</h1>
                    <div className="designCardContainer">
                        {this.userDesigns()}
                    </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        designs: state.designs,
        follows: state.follows
    }
}

function mapDispatchToProps(dispatch){
    return { 
        deleteFollowHandler: (followId) => dispatch(deleteFollowAction(followId)),
        addFollowHandler: (id) => dispatch(addFollowAction(id))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)