import * as actionTypes from './actionTypes'

const initialState={
    count : 45,
}
export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                count:state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count:state.count - 1
            }
            default:
                return state
        }

}