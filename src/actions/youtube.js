import { YOUTUBE } from "../constants/actionTypes";
import * as api from '../api/index'

export const youtube = (inputsearch) => async (dispatch) => {
    try {
        const {data} = await api.youTube(inputsearch)
        console.log('youtube',data.items)
        dispatch({type:YOUTUBE,payload:data.items})

    } catch (error) {
        console.log(error)
    }
}

