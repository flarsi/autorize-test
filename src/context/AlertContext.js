import React, {createContext, useReducer} from "react";

export const AlertContext = createContext()

export const AlertProvider = ({children}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'showAlert':
                return {show: true, text: action.payload};
            case 'closeAlert':
                return {show: false};
            default:
                throw new Error();
        }
    }

    const initialState = {
        show : true,

    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const showAlert = (payload = "some alert") => {
        dispatch({type: 'showAlert', payload})
    }

    const closeAlert = () => {
        dispatch({type: 'closeAlert'})
    }

    const timeOutShow = (time = 5000, text) => {
        showAlert(text)
        setTimeout(async () => {
            await closeAlert()
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