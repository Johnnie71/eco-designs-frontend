// hold our combined reducers as well as reducer functions

import { combineReducers } from 'redux'

const defaultState ={
    designs: [],
    users: [],
}

function designReducer(state = defaultState.designs, action){
    switch (action.type){
        case "FETCH_DESIGNS":
            console.log("Getting designs!")
            return{};

        default:
            return state

    }
}

function userReducer(state = defaultState.users, action){
    switch (action.type){
        case "FETCH_USERS":
            return {};

        default:
            return state
    }
}

//reducer takes in an action
//reducer also takes in a default state

const rootReducer = combineReducers({
    designs: designReducer,
    user: userReducer
});

export default rootReducer;