import React, { useContext, useState, useReducer } from 'react'
import StateContext from './StateContext'

const StateProvider = (props) => {
    const reducer =(state, action)=>{
        if(action.type === "add") {
            return {
                ...state, 
                basket:[...state.basket, action.item] 
            };
        }else if(action.type === "remove") {
            console.log(action.item.id); 
            const idx = state.basket.findIndex((basketItem)=>basketItem.id === action.item.id);
            let newBasket = [...state.basket]; 
            if(idx >= 0) {
                newBasket.splice(idx, 1); 
            } else {
                console.log("Can't remove the item it is not present in the basket"); 
            }
            // console.log(newBasket); 
            return {
                ...state,
                basket:newBasket
            }
            
        }
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