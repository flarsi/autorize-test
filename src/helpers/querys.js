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

export const createNewPostQuery = (data, token = localStorage.getItem("token")) => {
    return axios({
        method:"post",
        url: 'http://localhost:3001/api/v1/posts',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data
    })
}

export const getAllPostsFromUserId = (id) =>{
    return axios({
        method:"get",
        url: 'http://localhost:3001/api/v1/posts?postedBy='+ id,
    })
}

export const deletePostFromId = (id, token = localStorage.getItem("token")) =>{
    return axios({
        method:"delete",
        url: 'http://localhost:3001/api/v1/posts/'+id,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
export const patchPostFromId = (id, data, token = localStorage.getItem("token")) =>{
    return axios({
        method:"patch",
        url: 'http://localhost:3001/api/v1/posts/'+id,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data
    })
}