// hold our combined reducers as well as reducer functions



import { combineReducers } from 'redux'

const defaultState ={
    designs: [],
    users: [],
}

function designReducer(state = defaultState.designs, action){

    switch (action.type){
        case "FETCH_DESIGNS":
            console.log("Getting designs!", action)
            return action.payload;

        case "ADD_DESIGN":
            console.log("Adding Design!", state, action.newDesign)
            // const design = {designs: action.payload};
            return state.concat([ action.newDesign ]);

        case "DELETE_DESIGN":
            console.log("Deleting Design",  action.payload);
            const designs = state.filter(design => design.id !== action.payload.id)
            return {...state, designs}

        case "ADD_COMMENT":
            console.log("Adding Comment!", action.payload);
            return state

        case "DELETE_COMMENT":
            console.log("Deleting Comment", action.payload);
            return state

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
            console.log("adding User:", action)
            return [...state, action.payload]

        case "DELETE_USER":
            console.log("Deleting User:", action)
            const users = state.filter(user => user.id !== action.id)
            return [...state, users]
    
        case "EDIT_USER":
            console.log("Editing user!", action.payload)
            return state.map((user) => user.id === action.payload.id)
            // let newArray = [...state]
            // let foundUser = newArray.find(el => el.id === action.payload.id)
            // newArray[newArray.indexOf(foundUser)]
            // return {
            //     ...state, state: [...state, action.payload]
            // }
            // return state.map((user, index) => {
                // Find the item with the matching id
                // if(user.id === action.payload.id) {
                  // Return a new object
                //   return [...state, action.payload]
                // }
            
                // Leave every other item unchanged
                // return user;
            //   });

        default:
            return state
    }
}

//reducer takes in an action
//reducer also takes in a default state

const rootReducer = combineReducers({
    designs: designReducer,
    users: userReducer
});

export default rootReducer;