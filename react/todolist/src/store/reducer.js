import { combineReducers } from 'redux';

export default(state=12,action)=>{    //reducer是一个纯函数 可以直接导出 
    switch(action.type){
        case 'add':
            return state+action.value;
        case 'dec':
            return state-1;
        default:
            return state;
    }
}
let initValue = {
    list:[1,2,3]
}
// export default (state=initValue,action)=>{
//     switch(action.type){
//         case 'add_item':
//             let newState=JSON.parse(JSON.stringify(state));//深拷贝
//             newState.list.push('123');//之后再改   Object.assign({},state) 
//             return newState;
//         default:
//             return state;
//     }
// }

//合并
// const combineReducers = combineReducers({ 
//     inputChange, 
//     addTodo 
//     }) 

// export default combineReducers({
//     couner,todo
// })