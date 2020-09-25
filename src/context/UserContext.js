import React, {createContext, useReducer} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setUser':
                return {...state, ...action.payload};
            default:
                throw new Error();
        }
    }

    const [user, dispatch] = useReducer(reducer);

    const setUser = (payload) => {
        dispatch({type: 'setUser', payload})
    }

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}