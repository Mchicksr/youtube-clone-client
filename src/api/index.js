import axios from 'axios'
import config from '../config'

// const API = axios.create({baseUrl:config.API_ENDPOINT})
const API = axios.create({baseUrl:'https://code-youtube-clone.herokuapp.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPost = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts',newPost)
export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const dislikePost = (id) => API.patch(`/posts/${id}/dislikePost`)

export const signIn = (formData) => API.post('/user/signin',formData)
export const signUp = (formData) => API.post('/user/signup',formData)
export const upDateProfile = (id,updatedPro) => API.patch(`/user/${id}/profile`,updatedPro)
export const getUser = () => API.get('/user')
export const youTube = (inputsearch) => axios.get(`${config.YOUTUBE_APIp1}${inputsearch}${config.YOUTUBE_APIp2}`)
