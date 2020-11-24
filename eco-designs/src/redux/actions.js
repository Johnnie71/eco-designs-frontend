// holds all of our creators
  // function that returns an action


  ///////////////////////Designs Functions/////////////////////////
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

  export function addDesignAction(userId, newDesign){

    return function(dispatch){
      console.log("New Design Info!:", userId, newDesign.title)

      fetch(`http://localhost:4000/api/v1/users/${userId}/designs`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify(newDesign)
      })
        .then(resp => resp.json())
        // .then(newDesign => dispatch({ type: "ADD_DESIGN", payload: newDesign }))
        .catch(console.log)
        dispatch({type: "ADD_DESIGN", newDesign})
      }
  }

  export function deleteDesignAction(userId, designId){

    return function(dispatch){
      console.log("Deleted Design Info!:", userId, designId)

      fetch(`http://localhost:4000/api/v1/users/${userId}/designs/${designId}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_DESIGN", payload }))
        .catch(console.log)
    }
  }

  export function addDesignComment(designId, userComment){

    return function(dispatch){
      console.log("New Comment!:", userComment)

      fetch(`http://localhost:4000/api/v1/comments/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ user_id: 9, design_id: designId, comment: userComment })
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
        .then(payload => dispatch({ type: "DELETE_COMMENT", payload }))
        .catch(console.log)
    }
  }

  //////////////////////Users Action Functions//////////////////////

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
        .then(payload => dispatch({ type: "DELETE_USER", payload }))
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

  