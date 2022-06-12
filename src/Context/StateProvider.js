import React, { useContext, useState, useReducer } from 'react'
import StateContext from './StateContext'

const StateProvider = (props) => {
    const reducer =(state, action)=>{
        if(action.type === "add") {
            return {
                ...state, 
                basket:[...state.basket, action.item] 
            };
        }
        console.log(state);
    }
    // Selector 
    const getbasketTotal = (basket)=> basket?.reduce((amount, item)=> item.price + amount, 0); 
    let initialState = {
        basket:[], 
        user:null
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{state, dispatch, getbasketTotal}} >
            {props.children}
        </StateContext.Provider>
    )
}

export default StateProvider; 