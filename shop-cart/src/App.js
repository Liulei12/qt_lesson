import React from 'react';
import { connect } from 'react-redux' 
import './App.css';

class App extends React.Component{
  hanleCheck = (e,i) =>{
    const checked = e.target.checked
    this.props.checked(checked);
    
  }
  render() {
    const { shopCart } = this.props;
    console.log('shopCart',shopCart)
    return (
      <div> 
        {
          shopCart.map((good,i) =>{
            return (
              <div key={i}>
                {/* <label htmlFor=""></label> */}
                <input type="checkbox"
                checked={good.checked}
                onChange={(e)=>{
                  this.hanleCheck(e,i)}} />
                <label>
                  {good.name}/RMB:{good.price}
                </label>
                <button>-</button>
                {good.count}
                <button>+</button>
                <button onClick={()=>{
                  this.props.hanleDel(i)
                }}>delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    shopCart : state.shopCart
  }
}
const del = (i) => {
  return(dispatch) => {
    setTimeout(() => {
      dispatch({
        type:'DEL',
        index: i
      })
    }, 2000);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checked(checked,i) {
      dispatch({
        type:'TOGGLE_CHECKED',
        checked,
        index:i
      })
    },
    hanleDel(i){
      dispatch(del(i))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);