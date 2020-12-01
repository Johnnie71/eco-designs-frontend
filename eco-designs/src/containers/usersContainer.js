import React from 'react'
import UserCard from '../components/userCard'
import UserShow from '../components/userShow'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Search from '../components/Search'
// import {NavLink} from 'react-router-dom'


 

class UsersContainer extends React.Component{

    state = {
        searchValue: ""
    }

    // renderUsers = () =>{
    //     return this.props.users.map(user => <UserCard key={user.id} user={user} />)
    // }

    searchHandler = (e) =>{
        console.log(e.target.value)
        this.setState({
            searchValue: e.target.value
        })
    }

    filteredUsers = () =>{
        return this.props.users.filter(user => user.username.toLowerCase().includes(this.state.searchValue.toLowerCase()))
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
                        let users = this.filteredUsers().map(user => <UserCard key={user.id} user={user} />)
                        return(
                        <div>
                            <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
                            <h3 className="users">Users:</h3>
                            {/* <CreateUser newSubmitHandler={this.newSubmitHandler} /> */}
                            {/* {this.props.users.length > 0 ? this.renderUsers() : <h1>LOADING</h1>} */}
                            {/* {this.renderUsers()} */}
                            <div className="usersContainer">
                                {this.props.users.length > 0 ? users : <h1>LOADING</h1>}
                            </div>
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