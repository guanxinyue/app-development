import React, { Component } from 'react';
import store from './store';
class TodoList extends Component {
    constructor(){
        super();
        this.state=store.getState().list
        // this.state={
        //     list:[1,2,3,4]
        // };
        store.subscribe(()=>{
            this.setState({
            list:store.getState().list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            });
        }

    }    
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd()} type='text'/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
