import React from 'react';
import {connect} from 'react-redux';
import {handleInputAction,fetchWishAction,handleSubmitAction,handleDeleteAction} from '../actions/action';

class Home extends React.Component{
  componentDidMount(){
    this.props.wishDispatch();
  }
  render(){
     const list = this.props.wishes.map(item=>{
       if(item.access === false){
        return <p className="collection-item" key={item._id} onClick={(id)=>this.props.handleDelete(item._id)} >{item.wish}</p>
       }
       
     })
      return(
        <div>
          <form onSubmit={(e)=>this.props.handleSubmit(e)}>
            <input 
              type="text"
              name="item"
              value={this.props.text} 
              onChange={(e)=> this.props.handleInput(e.target.value)}
               />
              <button type="submit" className="waves-effect waves-light btn">Add</button> 
          </form>

       <div className="collection">
         {list}
      </div>
        </div>
      )
  }
 
}

const mapStateToProps = (state) => {
  return {
    text:state.text,
    wishes: state.mywishes
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  handleInput:(input) => {dispatch(handleInputAction(input))},
  wishDispatch: () => {dispatch(fetchWishAction())},
  handleSubmit: (e) => {dispatch(handleSubmitAction(e))},
  handleDelete: (id) => {dispatch(handleDeleteAction(id))}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
