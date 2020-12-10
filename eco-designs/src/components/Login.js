import React from 'react'
import { NavLink } from 'react-router-dom'


class Login extends React.Component{


    state= {
        username: '',
        password_digest: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state)

        return(
            <div className="form">
                <form >
                <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                <input name="password_digest" type="password" placeholder="password" value={this.state.password_digest} onChange={this.changeHandler} />
                <NavLink to={`/`} >
                    <button type="submit">Log In</button>
                </NavLink>
                </form>
            </div>

        )
    }

}


export default Login