const SetLinkReducer = (state="",action) => {
    if(action.type==="SET_Link"){
        return action.payload
    }else return state
    
}
 
export default SetLinkReducer;