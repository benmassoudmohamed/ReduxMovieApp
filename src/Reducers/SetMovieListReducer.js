const inti=[{name:'Avengers',rate:4, link:"https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg",id:Math.random(),description:"ok avenger"},
{name:'Annihilation',rate:2, link:"https://media.senscritique.com/media/000017617001/325/Annihilation.jpg",id:Math.random(),description:"ok annihilation"}]

const SetMovieListReducer = (state=inti,action) => {
    if(action.type==="ADD"){
        return [...state,action.payload]
    }else if(action.type==="EDIT"){
        return state.map(el=>(el.id===action.payload.id)?action.payload.newValue:el)
    }else if(action.type==="DELET"){
        return state.filter(el=>el.id!==action.payload )
    }
     return state;
}
 
export default SetMovieListReducer;