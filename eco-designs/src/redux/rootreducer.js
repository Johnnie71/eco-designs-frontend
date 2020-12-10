// hold our combined reducers as well as reducer functions



import { combineReducers } from 'redux'

const defaultState ={
    designs: [],
    users: [],
    comments: [],
    follows: []
}

function designReducer(state = defaultState.designs, action){

    switch (action.type){
        case "FETCH_DESIGNS":
            console.log("Getting designs!", action.payload)
            return action.payload;

        case "ADD_DESIGN":
            console.log("Adding Design!", state, action.payload)
            return [...state, action.payload]

        case "DELETE_DESIGN":
            console.log("Deleting Design", action.payload);
            return state.filter(design => design.id !== action.payload)

        default:
            return state

    }
}

function userReducer(state = defaultState.users, action){
    switch (action.type){
        case "FETCH_USERS":
            console.log("Getting Users!", action)
            return action.payload;

        case "ADD_USER":
            console.log("adding User:", action.payload)
            return [...state, action.payload]

        case "DELETE_USER":
            console.log("Deleting User:", action.payload)
            return state.filter(user => user.id !== action.payload)

        case "EDIT_USER":
            console.log("Editing user!", action.payload)
            return state.map((user) => user.id === action.payload.id)

        default:
            return state
    }
}

function commentReducer(state = defaultState.comments, action){
    switch(action.type){

        case "FETCH_COMMENTS":
            console.log("Getting Comments!", action.payload)
            return action.payload;

        case "ADD_COMMENT":
            console.log("Adding Comment!", action.payload);
            return [...state, action.payload]

        case "DELETE_COMMENT":
            console.log("Deleting Comment", action.payload);
            return state.filter(comment => comment.id !== action.payload)

        default:
            return state
    }
}

function followsReducer(state= defaultState.follows, action){
    switch(action.type){

        case "FETCH_FOLLOWS":
            console.log("Getting Follows!", action.payload)
            return action.payload

        case "ADD_FOLLOW":
            console.log("Adding Follow!", action.payload)
            return [...state, action.payload]

        case "DELETE_FOLLOW":
            console.log("deleting Follow!", state, action.payload)
            return state.filter(follow => follow.id !== action.payload)

        default:
            return state

    }
}

//reducer takes in an action
//reducer also takes in a default state

const rootReducer = combineReducers({
    designs: designReducer,
    users: userReducer,
    comments: commentReducer,
    follows: followsReducer,
});

export default rootReducer;