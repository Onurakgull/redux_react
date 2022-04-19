import * as actionTypes from './actionTypes'

export const increaseValue=()=>{
    return {
        type:actionTypes.INCREMENT
    }
}
export const decreaseValue=()=>{
    return {
        type:actionTypes.DECREMENT
    }
}