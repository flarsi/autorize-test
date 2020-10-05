import React, {createContext, useReducer} from "react";
import {SETPOSTBYID, SETPOSTS} from "./PostsTypes";

export const PostsContext = createContext()

export const PostsProvider = ({children}) => {
    const initialState = []

    const reducer = (state, action) => {
        switch (action.type) {
            case SETPOSTS:
                return action.payload;
            case SETPOSTBYID:
                return {...state[action.payload.index], ...action.payload.data}
            default:
                throw new Error();
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const setPosts = (payload) => {
        dispatch({type: SETPOSTS, payload})
    }
    const setPostById = (payload) => {
        dispatch({type: SETPOSTBYID, payload})
    }

    const reduceMethods = {
        setPosts,
        setPostById
    }

    return(
        <PostsContext.Provider value={{data, ...reduceMethods}}>
            {children}
        </PostsContext.Provider>
    )
}