// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Header from './components/header'
import DesignsContainer from './containers/designsContainer'
import { connect } from 'react-redux'
import { fetchDesignsAction, fetchUsersAction, fetchCommentsAction, fetchFollowsAction } from './redux/actions'
import UsersContainer from './containers/usersContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/signUp'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchDesigns();
    this.props.fetchUsers();
    this.props.fetchComments();
    this.props.fetchFollows();
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        {/* <Header /> */}
        <Switch>
            <Route path="/signup" render={() => <SignUp />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/" render={() => <DesignsContainer />} /> 
        </Switch> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchDesigns: () => dispatch(fetchDesignsAction()),
    fetchUsers: () => dispatch(fetchUsersAction()),
    fetchComments: () => dispatch(fetchCommentsAction()),
    fetchFollows: () => dispatch(fetchFollowsAction())
  }
}

export default connect(null, mapDispatchToProps)(App);
