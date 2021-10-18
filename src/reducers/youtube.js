import { YOUTUBE } from "../constants/actionTypes";

export default (videos=[],action) => {
    switch(action.type) {
        case YOUTUBE:
            return action.payload
        default:
            return videos
    }
}