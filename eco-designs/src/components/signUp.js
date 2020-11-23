import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addUserAction } from '../redux/actions'

class SignUp extends React.Component{

    state= {
        name: "",
        username: "",
        profile_pic: "",
        password_digest: ""
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localsubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "", username: "", profile_pic: "", password_digest: ""
        })
    }

    render(){

        return(
            <div>
                <form onSubmit={this.localsubmitHandler}>
                    <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} />
                    <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                    <input name="profile_pic" type="text" placeholder="Profile Pic" value={this.state.profile_pic} onChange={this.changeHandler} />
                    <input name="password_digest" type="text" placeholder="password" value={this.state.password_digest} onChange={this.changeHandler} />
                    <button type="submit">Sign Up!</button>
                </form>
                <h4>Already have an account?</h4>
                <NavLink to={"/login"}>
                        <strong>Sign In!</strong>
                </NavLink>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { submitHandler: (newUser) => dispatch(addUserAction(newUser)) }
}

export default connect(null, mapDispatchToProps)(SignUp)