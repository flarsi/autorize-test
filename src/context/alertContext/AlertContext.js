import React, {createContext, useReducer} from "react";
import {CLOSEALERT, SHOWALERT} from "./AlertTypes";

export const AlertContext = createContext()

export const AlertProvider = ({children}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case SHOWALERT:
                return {show: true, text: action.payload};
            case CLOSEALERT:
                return {show: false};
            default:
                throw new Error();
        }
    }

    const initialState = {
        show : false,

    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const showAlert = (payload = "some alert") => {
        dispatch({type: SHOWALERT, payload})
    }

    const closeAlert = () => {
        dispatch({type: CLOSEALERT})
    }

    const timeOutShow =   (time = 5000, text) => {
        showAlert(text)
        setTimeout(async () => {
             await dispatch({type: CLOSEALERT})
        }, time)
    }


    const reduceMethods = {
        showAlert,
        closeAlert,
        timeOutShow
    }

    return(
        <AlertContext.Provider value={{data, ...reduceMethods}}>
            {children}
        </AlertContext.Provider>
    )
}