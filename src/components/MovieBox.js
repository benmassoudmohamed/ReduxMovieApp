import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
const MovieBox = (props) => {
    return ( <div style={{display:"flex"}}>
        {props.MovieTab.filter(el=>el.name.toUpperCase().includes(props.search.toUpperCase())).filter(el=>el.rate>=props.Star.filter(el=>el.isColored===true).length).map((el,i)=><div key={i}> 
        <div>{''.padEnd(el.rate,'⭐')}</div>
            <img src={el.link} alt="img/"/>
            <p>{el.name}</p>
            <button onClick={()=>props.EditeMovie(el.id,el.rate,el.name,el.link)}>Edite</button>
            <button onClick={()=>props.DeleteMovie(el.id)}>Delete</button>
           <Link  to={`/movie/${el.id}`}> <button >Description</button></Link>
        </div>)} 
        <div onClick={props.IsShow}>Add Movie</div>
        <div style={{display:(props.show)?"block":"none"}} >
            <input type='text' placeholder='titre' onChange={(e)=>props.SetTitre(e.target.value)}/>
            <input type='text' placeholder='link' onChange={(e)=>props.SetLink(e.target.value)}/>
            <input type='text' placeholder='rate' onChange={(e)=>props.SetRate(e.target.value)}/>
            <input type='text' placeholder='description' onChange={(e)=>props.DescriptionMovie(e.target.value)}/>
            <button onClick={()=>props.AddMovie({name:props.Titre,rate:props.Rate,link:props.link,description:props.Desc,id:Math.random()})}>Add</button>
        </div>
    </div> );

}
const mapDispatchToprops=(dispatch)=>{
    return{
        SetTitre:(a)=>dispatch({type:'SET_TITRE',payload:a}),
        SetLink:(a)=>dispatch({type:'SET_Link',payload:a}),
        SetRate:(a)=>dispatch({type:'SET_Rate',payload:a}),
        EditeMovie:(id,rate,name,link,Desc)=>{
            const newRate=prompt('new rate',rate )
            const newName=prompt('new name',name )
            const newLink=prompt('new link',link )
            const newDesc=prompt('new Desc',Desc )
            dispatch({type:'EDIT',payload:{id:id,newValue:{rate:newRate,name:newName,link:newLink,Desc:newDesc } }})},
        DeleteMovie:(id )=>dispatch({type:'DELET',payload:id}),
        DescriptionMovie:(a)=>dispatch({type:'DESESC_MOVIE',payload:a}),
        IsShow:()=>dispatch({type:"SHOW"}),
        AddMovie:(input)=>dispatch({type:"ADD",payload:input})


        
        

    }

}
 const mapStateToProps=(state)=>{
     return{
         MovieTab:state.MovieTab,
         search:state.InputValue,
         Star:state.StarTab,
         Titre:state.SetTitre,
         link:state.SetLink,
         Rate:state.SetRate,
         show:state.show,
         description:state.description



     }
 }
export default connect(mapStateToProps,mapDispatchToprops)( MovieBox);
