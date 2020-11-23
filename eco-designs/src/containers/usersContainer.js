import React from 'react'
import UserCard from '../components/userCard'
import UserShow from '../components/userShow'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'

 

class UsersContainer extends React.Component{

    renderUsers = () =>{
        return this.props.users.map(user => <UserCard key={user.id} user={user} />)
    }

    render(){
 
        return (
            <div>
                <Switch>
                    <Route path="/users/:id" render={(routerProps) => {
                         let id = parseInt(routerProps.match.params.id)
                         let user
                         if(this.props.users.length > 0){
                             user = this.props.users.find(el => el.id === id)
                         }
                         return(
                             <>
                                {this.props.users.length > 0 ?
                                <div>
                                    <UserShow user={user} />
                                </div>
                                    : <h1>Loading</h1>
                                }
                             </>
                         )
                    }}/>
                    <Route path="/users" render={()=> {
                        return(
                        <div>
                            <h3>Users:</h3>
                            {/* <CreateUser newSubmitHandler={this.newSubmitHandler} /> */}
                            {this.props.users.length > 0 ? this.renderUsers() : <h1>LOADING</h1>}
                            {/* {this.renderUsers()} */}
                        </div>
                        )
                    }}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {users: state.users}
}

export default connect(mapStateToProps)(UsersContainer)