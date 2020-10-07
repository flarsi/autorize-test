import {useEffect} from "react";

export const isResponseOk = (status, callback) => {
    if (status === 200){
        return callback()
    }else return new Error()
}

export const useOutsideClick = (ref, callbackOutside = () => {}, callbackInside = () => {}) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callbackOutside()
            }else {
                callbackInside()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callbackOutside, callbackInside, ref]);
}