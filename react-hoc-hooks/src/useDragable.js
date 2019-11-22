import React,{ useState } from 'react'


//hooks
//自定义 hooks 方法名以use开头
export default function useDragable(){
    let [left,setLeft] = useState(0);
    let [top, setTop] = useState(0);
    let startx = 0,starty = 0;
    const handleMouseMove = function (e) {
        let left = e.clientX;
        let top = e.clientY;
        setLeft(left);
        setTop(top);
    }
    const mouseup = function() {
        document.removeEventListener('mousemove',handleMouseMove)
    }
    const handleDown = function() {
        document.addEventListener('mousemove',handleMouseMove)
        document.addEventListener('mouseup',mouseup)
    }

return {
    style:{
        left,
        top
    },
    handleDown
}
}