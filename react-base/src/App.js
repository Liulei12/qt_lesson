import React from 'react';
import logo from './logo.svg';
import './App.css';

// function组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
var arr1 = [1,2,3];
var arr2 = [];
for (let i of arr1){
  arr2.push(2 * i);
};
var arr3 = arr1.map(i => i * 2)
// class组件
const Text = (
  <p>
    这是一段文本
  </p>
)
class Child extends React.Component {
  render(){
    return (
      <div>
        Child
      </div>
    )
  }
}
{/* <></> = <React.Fragment></React.Fragment> */}
class Button extends React.Component {
  //jsx == 一段 html
  render() {
    return (
      <>
      <button>
        登录
        {
          true ? (<span>已登录</span>):(<span>未登录</span>)
        }
      </button>
      <div>
        {arr1}
        {
          arr1.map(num => {
            return (
              <li>{num}</li>
            )  
          })
        }
        {Text}
        <Child />
      </div>
      </>
    )
  }
}

export default Button;
