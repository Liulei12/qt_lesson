import React ,{ Component } from 'react'
import WithLogin from './WithLogin'

class OrderList extends Component{
    
    render(){
            return (
                <ul>
                    <li>Ipad</li>
                    <li>Mac</li>
                </ul>
            )
    }
}
//WitnLogin 返回的是组件
export default OrderList;
