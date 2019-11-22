import React from 'react'

export default function withDragAble(Com) {
    class withDragAble extends React.Component {
        state = {
            left: 0,
            top: 0
        }
        handleMove = (e) => {
            let left = e.clientX - this.startX;
            let top = e.clientY - this.startY;
            this.setState({
                left,
                top
            })
        }
        handleUp = () => {
            document.removeEventListener('mousemove', this.handleMove)
        }
        handleDown = (e) => {
            this.startX = 0;
            this.startY = 0;
            document.addEventListener('mousemove', this.handleMove)
            document.addEventListener('mouseup', this.handleUp)
        }
        render() {
            const { left, top } = this.state;
            return (
                <div
                    style={{ left, top }}
                    onMouseDown={this.handleDown}
                    className="drag">
                    <Com />
                </div>
            )
        }
    }
     return withDragAble
}