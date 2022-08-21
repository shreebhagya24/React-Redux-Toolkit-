import {createReducer} from "@reduxjs/toolkit"

const intialState= {
    c: 0,
}

export const changeTheNumber = createReducer(intialState, {
    
    increment : (state) => {
        state.c = state.c + 1;
    },

    decrement : (state) => {
        state.c -= 1;
    },

    incrementByValue : (state, action)=> {
        state.c += action.payload; 
    },

});
    