import {ADD_PLACE, REMOVE_PLACE, EDIT_PLACE} from './types';

//An action is a function that tells the reducer how to change its data
export const addPlace = (newPlaceObj)=>{
    return{
        type: ADD_PLACE,
        payload: newPlaceObj
    }
};

export const removePlace = (ID)=>{
    return{
        type: REMOVE_PLACE,
        payload: ID
    }
};

// export const editPlace = ()