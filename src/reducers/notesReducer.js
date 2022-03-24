import { types } from "../types/types";

const initialstate = {
    notes: [],
    active: null
};

export const notesReducer = ( state = initialstate, action ) => {

    switch ( action.type ) {

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            };

        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            };
    
        default:
            return state;
    }

};