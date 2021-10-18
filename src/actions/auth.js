import { AUTH, PROFILE_UPDATE,GET_ALL } from "../constants/actionTypes";
import * as api from '../api/index'


export const signin = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id,updatedPro) => async (dispatch) => {
    try {
        const {data} = await api.upDateProfile(id,updatedPro)
        dispatch({type:PROFILE_UPDATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getUser = () => async (dispatch) => {
    const {data} = await api.getUser()
    dispatch({type:GET_ALL,payload:data})
}