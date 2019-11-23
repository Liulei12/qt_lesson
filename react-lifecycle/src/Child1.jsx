import React, { Component } from 'react';
class Child1 extends Component {
  state = {
    data: 1
  }
  componentWillMount() {
    const { list } = this.props;
    this.setState({
      list
    })
    console.log('componentWillMount');
  }
  componentDidMount() {
    setInterval(() => {
      console.log(123456)
      const list =this.state.list.slice(0)
      list.push(10);
      this.setState({
        list
      })
    }, 1000);
    console.log('componentDidMount');
  }
  update = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  //props
  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps,this.props);
    let list = this.state.list.slice(0)
    list.splice(0,3,...(nextProps.list))
    this.setState({
      list
    })
  }
  //性能优化
  shouldComponentUpdate(nextProps,nextState) {
    console.log(nextProps,nextState)
    // if (this.setState.data < 3){
    //   return false
    // }
    return true;
  }
  componentWillUnmount(){
    //清理操作
    //定时器 全局绑定方法
    clearInterval(this.interVal); 

  }
  render() {
    return (
      <div onClick={this.update}>Child1
  :{ this.state.data }
      <ul>
        {
          this.state.list.map(el => {
            return (
              <li>{el}</li>
            )
          })
        }
      </ul>
  </div>
    )
  }
}
export default Child1