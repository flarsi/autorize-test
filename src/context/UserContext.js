import React, {createContext, useReducer} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const initialState = {
        stayInSystem : false,
        isAuth: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setUserData':
                return {...state, ...action.payload};
            case 'stayInSystem':
                return {...state, stayInSystem: !state.stayInSystem};
            case 'isAuth':
                return {...state, isAuth: !state.isAuth};
            case 'logOut':
                return initialState;
            default:
                throw new Error();
        }
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

    const logOut = () => {
        dispatch({type: 'logOut'})
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