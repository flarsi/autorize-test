export const isResponseOk = (status, callback) => {
    if (status === 200){
        return callback()
    }else return new Error()
}