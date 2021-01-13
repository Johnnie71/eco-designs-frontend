// holds all of our creators
  // function that returns an action


  ///////////////////////Designs Actions/////////////////////////
  export function fetchDesignsAction(){
      
    return function(dispatch){

       //thunk retains access to dispatch and passes it to the inner function
        fetch('http://localhost:4000/api/v1/designs/')
        .then(resp => resp.json())
        //must have access to dispatch
        //invoke dispatch with an object as an action
        .then(data =>dispatch({type: "FETCH_DESIGNS", payload: data }))
        .catch(console.log)
    }
  }

  export function addDesignAction(newDesign){

    return function(dispatch){
      console.log("New Design Info!:", newDesign)

      fetch(`http://localhost:4000/api/v1/designs/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify(newDesign)
      })
        .then(resp => resp.json())
        .then(design => dispatch({ type: "ADD_DESIGN", payload: design }))
        .catch(console.log)
        // dispatch({ type: "ADD_DESIGN", newDesign })
      }
  }

  export function deleteDesignAction(designId){

    return function(dispatch){
      console.log("Deleted Design ID!:", designId)

      fetch(`http://localhost:4000/api/v1/designs/${designId}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(design => dispatch({ type: "DELETE_DESIGN", payload: designId }))
        // dispatch({ type: "DELETE_DESIGN", payload })
        .catch(console.log)
    } 
  }


  ////////////////////Comments Actions///////////////////////

  export function fetchCommentsAction(){
      
    return function(dispatch){

       //thunk retains access to dispatch and passes it to the inner function
        fetch('http://localhost:4000/api/v1/comments/')
        .then(resp => resp.json())
        //must have access to dispatch
        //invoke dispatch with an object as an action
        .then(data => dispatch({ type: "FETCH_COMMENTS", payload: data }))
        .catch(console.log)
    }
  }

  export function addDesignComment(userId, designId, userComment){

    return function(dispatch){
      console.log("New Comment!:", userComment)

      fetch(`http://localhost:4000/api/v1/comments/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ user_id: 39, design_id: designId, comment: userComment })
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_COMMENT", payload }))
        .catch(console.log)
    }
  }

  export function deleteDesignComment(commentId){

    return function(dispatch){
      console.log("Deleted Comment ID:", commentId)

      fetch(`http://localhost:4000/api/v1/comments/${commentId}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(comment => dispatch({ type: "DELETE_COMMENT", payload: commentId }))
        .catch(console.log)
    }
  }

  //////////////////////Users Actions//////////////////////

  export function fetchUsersAction(){
      
    return function(dispatch){

       //thunk retains access to dispatch and passes it to the inner function
        fetch('http://localhost:4000/api/v1/users/')
        .then(resp => resp.json())
        //must have access to dispatch
        //invoke dispatch with an object as an action
        .then(data => dispatch({type: "FETCH_USERS", payload: data }))
        .catch(console.log)
    }
  }

  export function addUserAction(newUser){

    return function(dispatch){
      console.log("new user info:", newUser)
      fetch('http://localhost:4000/api/v1/users/', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_USER", payload }))
        .catch(console.log)
    }
  }

  export function deleteUserAction(id){

    return function(dispatch){
      console.log("deleted user:", id)
      fetch(`http://localhost:4000/api/v1/users/${id}`, {
        method: "Delete"
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_USER", payload: id }))
        .catch(console.log)
    }
  }

  export function editUserAction(id, user){

    return function(dispatch){

      console.log("edited user:", user)
      fetch(`http://localhost:4000/api/v1/users/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "EDIT_USER", payload }))
        .catch(console.log)
    }
  }


  /////////////////Follow/Follower Actions///////////////////////

  export function fetchFollowsAction(){
      
    return function(dispatch){

       //thunk retains access to dispatch and passes it to the inner function
        fetch('http://localhost:4000/api/v1/follow_joins/')
        .then(resp => resp.json())
        //must have access to dispatch
        //invoke dispatch with an object as an action
        .then(data => dispatch({type: "FETCH_FOLLOWS", payload: data }))
        .catch(console.log)
    }
  }

  export function addFollowAction(userId){

    return function(dispatch){
      console.log("new follow Info:", userId)
      fetch('http://localhost:4000/api/v1/follow_joins/', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({following_id: 39, followed_id: userId})
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_FOLLOW", payload }))
        .catch(console.log)
    }
  }

  export function deleteFollowAction(followId){

    return function(dispatch){
      console.log("ABOUT TO DELETE follow!:", followId)
      fetch(`http://localhost:4000/api/v1/follow_joins/${followId}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(data => dispatch({ type: "DELETE_FOLLOW", payload: followId }))
        .catch(console.log)
    }
  }
  
  