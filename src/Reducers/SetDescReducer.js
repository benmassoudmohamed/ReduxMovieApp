const SetDescreducer = (state="",action) => {
    if (action.type==="DESESC_MOVIE"){
        return action.payload

    }else return state
}
 
export default SetDescreducer;