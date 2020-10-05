import React, {createContext, useReducer} from "react";
import {ISAUTH, LOGOUT, SETUSERDATA, STAYINSYSTEM} from "./UserTypes";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const initialState = {
        stayInSystem : false,
        isAuth: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case SETUSERDATA:
                return {...state, ...action.payload};
            case STAYINSYSTEM:
                return {...state, stayInSystem: !state.stayInSystem};
            case ISAUTH:
                return {...state, isAuth: !state.isAuth};
            case LOGOUT:
                return initialState;
            default:
                throw new Error();
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const setUserData = (payload) => {
        dispatch({type: SETUSERDATA, payload})
    }

    const changeStayInSystem = () => {
        dispatch({type: STAYINSYSTEM})
    }
    const isAuth = () => {
        dispatch({type: ISAUTH})
    }

    const logOut = () => {
        dispatch({type: LOGOUT})
        localStorage.clear()
    }

    const reduceMethods = {
        setUserData,
        changeStayInSystem,
        isAuth,
        logOut
    }

    return(
        <UserContext.Provider value={{data, ...reduceMethods}}>
            {children}
        </UserContext.Provider>
    )
}