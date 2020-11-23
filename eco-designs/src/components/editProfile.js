import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { editUserAction } from '../redux/actions'
import { deleteUserAction } from '../redux/actions'


class EditProfile extends React.Component{

    state = {
        name: this.props.user.name,
        username: this.props.user.username,
        profile_pic: this.props.user.profile_pic,
        bio: this.props.user.bio,
        password_digest: this.props.user.password_digest
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localsubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.props.user.id, this.state)
    }

    localDeleteHandler = (e) => {
        this.props.deleteHandler(this.props.user.id)
    }

    render(){

        return(
            <div> 
                <form onSubmit={this.localsubmitHandler}>
                    <input name="name" type="text" value={this.state.name} onChange={this.changeHandler}/>
                    <input name="username" type="text" value={this.state.username} onChange={this.changeHandler}/>
                    <input name="profile_pic" type="text-area" value={this.state.profile_pic} onChange={this.changeHandler}/>
                    <input name="bio" type="text" value={this.state.bio} onChange={this.changeHandler}/>
                    <input name="password_digest" type="text" value={this.state.password_digest} onChange={this.changeHandler}/>
                    <button type="submit">Update Profile</button>
                </form>
                <NavLink to="/users" >
                <button onClick={this.localDeleteHandler}>Delete Profile?</button>
                </NavLink>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { 
        submitHandler: (id, editedUser) => dispatch(editUserAction(id, editedUser)),
        deleteHandler: (id) => dispatch(deleteUserAction(id))
    }
}

export default connect(null, mapDispatchToProps)(EditProfile)