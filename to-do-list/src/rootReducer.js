const INITIAL_STATE = {todos: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD":
            console.log({...state, todos: [...state.todos, action.payload]});
            return {...state, todos: [...state.todos, action.payload]};
        case 'DELETE': 
            return {...state, todos: state.todos.filter(item => item !== action.payload)};
        default:
            return state;
    }
}

export default rootReducer;