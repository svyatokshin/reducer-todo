
export const initialState = [{
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        todo: 'Learn about Seducers',
        completed: false,
        id: 214324324
    }
]


export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {todo: action.payload, completed:false, id:Date.now()}
            ];
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if(item.id === action.payload) {
                   return {...item, completed: !item.completed} 
                } 
                else {
                    return item
                }
            })
        case 'CLEAR_COMPLETED':
            return state.filter(item => 
                item.completed === false
            )
            default:
                return state;
    }
}