import React, {createContext, useReducer} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setUserData':
                return {...state, ...action.payload};
            case 'stayInSystem':
                return {...state, stayInSystem: !state.stayInSystem};
            case 'isAuth':
                return {...state, isAuth: !state.isAuth};
            default:
                throw new Error();
        }
    }

    const initialState = {
        stayInSystem : false,
        isAuth: false
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const setUserData = (payload) => {
        dispatch({type: 'setUserData', payload})
    }

    const changeStayInSystem = () => {
        dispatch({type: 'stayInSystem'})
    }
    const isAuth = () => {
        dispatch({type: 'isAuth'})
    }

    const reduceMethods = {
        setUserData,
        changeStayInSystem,
        isAuth,
    }

    return(
        <UserContext.Provider value={{data, ...reduceMethods}}>
            {children}
        </UserContext.Provider>
    )
}