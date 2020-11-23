import React from 'react'


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
            <div>
                <form >
                <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                <input name="password_digest" type="text" placeholder="password" value={this.state.password_digest} onChange={this.changeHandler} />
                <button type="submit">Log In</button>
                </form>
            </div>

        )
    }

}


export default Login