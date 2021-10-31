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

// export const fetchPost = () => API.get('/posts')
export const fetchPost = () => axios.get(`${config.API_ENDPOINT}/posts`)
export const createPost = (newPost) => axios.post(`${config.API_ENDPOINT}/posts`,newPost)
export const updatePost = (id,updatedPost) => axios.patch(`${config.API_ENDPOINT}/posts/${id}`,updatedPost)
export const deletePost = (id) => axios.delete(`${config.API_ENDPOINT}/posts/${id}`)
export const likePost = (id) => axios.patch(`${config.API_ENDPOINT}/posts/${id}/likePost`)
export const dislikePost = (id) => axios.patch(`${config.API_ENDPOINT}/posts/${id}/dislikePost`)

export const signIn = (formData) => axios.post(`${config.API_ENDPOINT}/user/signin`,formData)
export const signUp = (formData) => axios.post(`${config.API_ENDPOINT}/user/signup`,formData)
export const upDateProfile = (id,updatedPro) => axios.patch(`${config.API_ENDPOINT}/user/${id}/profile`,updatedPro)
export const getUser = () => axios.get(`${config.API_ENDPOINT}/user`)
export const youTube = (inputsearch) => axios.get(`${config.YOUTUBE_APIp1}${inputsearch}${config.YOUTUBE_APIp2}`)
