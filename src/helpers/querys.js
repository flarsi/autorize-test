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

export const getUserById = (id) =>  axios({
    method:"get",
    url: 'http://localhost:3001/api/v1/users/' + id,
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

export const getAllPosts = (token = localStorage.getItem("token")) => axios({
    method:"get",
    url: 'http://localhost:3001/api/v1/posts',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getPostById = (id) => axios({
    method:"get",
    url: 'http://localhost:3001/api/v1/posts/' + id,
})

export const deletePostFromId = (id, token = localStorage.getItem("token")) =>{
    return axios({
        method:"delete",
        url: 'http://localhost:3001/api/v1/posts/'+id,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const patchUserById = (id, name, token = localStorage.getItem("token")) => axios({
    method: "patch",
    url: 'http://localhost:3001/api/v1/users/' + id,
    headers: {
        Authorization: `Bearer ${token}`,

    },
    data: {
        name: name
    }
})

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

export const updateUserAvatar = (id, data, token = localStorage.getItem("token")) => axios({
    method:"put",
    url: 'http://localhost:3001/api/v1/users/upload/'+id,
    headers: {
        Authorization: `Bearer ${token}`
    },
    data: data
})

export const updatePostImg = (id, data, token = localStorage.getItem("token")) => axios({
    method:"put",
    url: 'http://localhost:3001/api/v1/posts/upload/'+id,
    headers: {
        Authorization: `Bearer ${token}`
    },
    data: data
})