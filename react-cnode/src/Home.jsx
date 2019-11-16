import React, { Component } from 'react'
import axios from './axios'
import { Pagination } from 'antd';
import { Spin } from 'antd';
import './App.css'
import { Link } from 'react-router-dom'

const perSize = 40
const tabMap = {
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华',
  'all': '全部'
}
class Home extends Component {
  state = {
    current: 3,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoding: false
  }
  componentDidMount() {
    this.handleRequestList()
  }
  handleRequestList = () => {
    //setState是异步的
    // 事物
    this.setState({
      isLoding: true
    })
    const { tab, limit, current } = this.state
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`).then(res => {
      console.log(res.data)
      this.setState({
        list: res.data,
        isLoding: false
      })
    })
  }
  handleChangetab = (key) => (e) => {
    this.setState({
      tab: key
    }, () => {
      this.handleRequestList()
    })
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    }, () => {
      this.handleRequestList()
    })
  }
  render() {
    const { list, tab, isLoding } = this.state
    return (
      <div>
        <ul>
          {
            Object.keys(tabMap).map((key, i) => {
              return (
                <li style={{ color: tab === key ? 'red' : '' }} onClick={this.handleChangetab(key)}>{tabMap[key]}</li>
              )
            })
          }
        </ul> 
        <Spin spinning={isLoding}>
          {
            list.data && list.data.map((dis, i) => {
              return (
                <Link to={`/topic/${dis.id}`} >
                  <li key={`dis${i}`}>
                    <img src={dis.author.avatar_url} alt="" />
                    <span>{dis.author.loginname}</span>
                    <h2>{dis.title}</h2>
                  </li>
                </Link>
              )
            })
          }
        </Spin>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}
export default Home
