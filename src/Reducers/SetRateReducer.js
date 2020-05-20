const  SetRateReducer= (state="",action) => {
    if(action.type==="SET_Rate"){
        return action.payload
    } return state
}
 
export default SetRateReducer ;