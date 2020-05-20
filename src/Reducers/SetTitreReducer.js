const SetTitreReducer  = (state="",action) => {
   if(action.type==="SET_TITRE"){
       return action.payload
   }else return state
}
 
export default SetTitreReducer ;