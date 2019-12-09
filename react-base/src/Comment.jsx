import React, { Component } from 'react';
class Input extends Component {
    //静态属性
    state = {
        value: ''
    }
    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            value
        })
    }
    //单项数据流
    // input 受控组件 完全受 state.value 的控制
    handleSubmit = (event) => {
        const { value } = this.state
        const { onReceive } = this.props;
        console.log(value)
         //回调 函数
         onReceive(value);
    }
    render() {
        const { value } = this.state;
        
       
        return (
            <>
                <input type="text" value={value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>submit</button>
            </>)
    }
}
class CommentList extends Component {
    render() {
        const { clist } = this.props;
        return (
            <>
                {
                    clist.map((list, index) => {
                        return (
                            <li key={index}>
                                {list.content}
                            </li>
                        )
                    })
                }
            </>
        )

    }
}
class Comment extends Component {
    state = {
        clist: [
            { content: '666' }
        ]
    }
    handleReceiveComment = (value) => {
        console.log('父组件value', value);
        //不可变数据
        let clist = this.state.clist.slice(0)
        clist.push({ content: value })
        this.setState({
            clist
        })
    }
    render() {
        const { clist } = this.state;
        return (
            <>
                <Input onReceive={this.handleReceiveComment} />
                <CommentList clist={clist} />
            </>)
    }
}
export default Comment;
