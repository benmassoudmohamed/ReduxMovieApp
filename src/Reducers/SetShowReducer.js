const SetShowReducer = (state=false,action) => {
   if(action.type==="SHOW"){
       return !state
   }else return state
}
 
export default SetShowReducer;