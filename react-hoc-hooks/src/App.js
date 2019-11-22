import React,{ useState } from 'react';
import Drag from './Drag1'
import logo from './logo.svg';
import './App.css';
import withDragAble from './WithDragAble'
import useDrag from './useDragable';

//hooks
//react15 function 组件没有 state  this 没有生命周期
//只负责 单纯接受 props 渲染

//react 16 
//hooks 作用： 组件之间逻辑复用，相比 hoc 解决那些问题
// 让逻辑扁平化了
//Promise -> async
function Header() {
  return (
    <h2>h2</h2>
  )
}
function Footer() {
  //state hooks
  const [count, setCount] = useState(0); // state={0}
  const { style,handleDown } = useDrag();
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      foot:{ count }
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const DragH2 = withDragAble(Header)
function App() {
  return (
    <>
      <Drag />
      <DragH2 />
      <Footer />
    </>
  );
}

export default App;
