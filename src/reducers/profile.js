import { PROFILE_UPDATE,GET_ALL } from "../constants/actionTypes";

export default (profiles=[],action) => {
    switch (action.type) {
        case GET_ALL:
            return action.payload
        case PROFILE_UPDATE:
            return profiles.map((profile)=> profile._id === action.payload.id ? action.payload : profile)
        default:
            return profiles
    }
}