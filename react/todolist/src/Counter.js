import React, { Component } from 'react';
import store from './store';
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter //返回的属性对应的是counter里的数据（合并之后）
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action ={type:'add',value:10}
        store.dispatch(action);

    }
    render() {
        return (
            <div>
                <p>
                    Click<span>{this.state}</span>
                    <br/>
                    <button>{this.handleAdd}</button>

                </p>
            </div>
        );
    }
}

export default Counter;
