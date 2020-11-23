import React from 'react'
import { NavLink } from 'react-router-dom'


class UserCard extends React.Component{

   

    render(){
        console.log(this.props.user.designs)

        let { username,  profile_pic} = this.props.user
        return(
            <div>
                    <img className="profileImg" src={profile_pic} alt="profileimg"/>
                    <NavLink to={`/users/${this.props.user.id}`} >
                    <h1>{username}</h1>
                    </NavLink>
            </div>
        )
    }
}

export default UserCard