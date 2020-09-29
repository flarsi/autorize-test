import axios from "axios";

export const bearerAuth = (token = localStorage.getItem("token")) => {
    return axios({
        method:"get",
        url: 'http://localhost:3001/api/v1/auth/user',
        headers: {
            Authorization: `Bearer ${token}`,

        },
    })
}

export const mailAuth = (user) => axios({
    method:"post",
    url: 'http://localhost:3001/api/v1/auth',
    data: {
        email: user.data.email,
        password: user.data.password
    }
})

export const registerQuery = (user) =>  axios({
    method:"post",
    url: 'http://localhost:3001/api/v1/users',
    data: {
        name: user.data.name,
        email: user.data.email,
        password: user.data.password
    }
})