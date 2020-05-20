import React, { Component } from 'react';
import { connect } from 'react-redux';
class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( <div>
            <input type="text " placeholder="search" onChange={(e)=>this.props.SetInput(e.target.value)}/>
            {this.props.star.map(el=><span onClick={()=>this.props.SetStar(el.id)}>{(el.isColored)?"⭐" :el.icon}</span>)}
      </div> );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        SetInput:(a)=>dispatch({type:'SET_INPUT',payload:a}),
        SetStar:(b)=>dispatch({type:'STAR_COLOR',payload:b})

    }
}
const mapStateToProps=(state)=>{
    return{
        search:state.InputValue,
        star:state.StarTab,

    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Header);