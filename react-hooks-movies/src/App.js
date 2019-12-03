import React ,{ useMemo,useState,useCallback,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

let set1 = new Set();
let set2 = new Set();
//包装地狱 wrapper hell
// class App extends React.Component{}
// react-XXX (reactRouter(connect(App)))
//use
function App(){
  let [count,setCount] = useState(0);
  const [time,setTime] = useState(0);

  const calculate = useMemo(() => count + ',' + time,[count])
  const fn1 = () => count + ',' + time
  const fn2 = useCallback(() => count + ',' + time,[count])
  set1.add(fn1)
  set2.add(fn2)
  useEffect(() => {
    console.log(123);
    return () => {
      console.log('卸载')
    }
  })
  return(
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => {
        setCount(count++)
      }}>count++</button>
      <button onClick={() => {
        setTime(Date.now())
      }}>time change</button>
    </div>
  )
}
export default App
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
