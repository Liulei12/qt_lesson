import React,{ Component } from 'react'
export default function(Com) {
    class WithLogin extends Component{
        state = {
            isLogin: false
        }
        render(){
            const { isLogin } = this.state
            if(isLogin){
                return(
                    <Com />
                )
            }
            return (
                <button onClick={
                    () => {
                        this.setState({
                            isLogin:true
                        })
                    }
                }>Login</button>
            )
        }
    }
    return WithLogin;
}