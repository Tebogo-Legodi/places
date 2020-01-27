import { ADD_PLACE, REMOVE_PLACE } from "../actions/types";

const INITIAL_STATE = {
    placeList: []

};

export default (state = INITIAL_STATE, action)=>{

    switch(action.type){
        case ADD_PLACE:
            return{
                ...state, placeList: [...state.placeList, action.payload]
            }
        case REMOVE_PLACE:
            return{
                ...state, 
                placeList: state.placeList.filter(place=> place.id != action.payload)
            }
        default:
            return state
    }
}