import React from 'react'
import UserDesigns from './userDesigns'
import EditProfile from './editProfile'
import DesignForm from './designForm'

// import { deleteUserAction } from '../redux/actions'

class UserShow extends React.Component{

    state = {
        clicked: false,
        designClicked: false,
        name: this.props.user.name,
        username: this.props.user.username,
        profile_pic: this.props.user.profile_pic,
        bio: this.props.user.bio,
        password_digest: this.props.user.password_digest
    }

    userDesigns = () =>{
        return this.props.user.designs.map(design => <UserDesigns key={design.id} design={design} user={this.props.user} />)
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

    // localDeleteHandler = (e) =>{

    // }

    render(){

        let { name, bio, profile_pic} = this.props.user
        return(
            <div>
                <h1>User Card</h1>
                    <h1>{name}</h1>
                    <h4>{bio}</h4>
                    <img className="profileImg" src={profile_pic} alt="profileimg"/>
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



export default UserShow