import {createStore} from 'redux'; //store的生成是从导入的redux
import reducer from './reducer';
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;