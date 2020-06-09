const initState = {
    posts : [
        {id: '1' , title : 'Lorem Ipsum'},
        {id: '2' , title : 'Squirtle Lorem'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(postm => {
            return action.id !== postm.id
        })
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
}

export default rootReducer;