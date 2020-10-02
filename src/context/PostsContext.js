import React, {createContext, useReducer} from "react";

export const PostsContext = createContext()

export const PostsProvider = ({children}) => {
    const initialState = []

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setPosts':
                return action.payload;
            default:
                throw new Error();
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const setPosts = (payload) => {
        dispatch({type: 'setPosts', payload})
    }

    const reduceMethods = {
        setPosts,

    }

    return(
        <PostsContext.Provider value={{data, ...reduceMethods}}>
            {children}
        </PostsContext.Provider>
    )
}