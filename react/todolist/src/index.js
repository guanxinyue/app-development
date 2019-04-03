import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
import CostomLink from './containers/CostomLink'
import AuthExample from '.auth/AuthExample'

import Counter from './Counter';
import TodoList from './TodoList';


ReactDOM.render(
    // <Router>
    //     <App />
    // </Router>,
    // <CostomLink />,
    // <AuthExample />,
    <div style={{padding:'30px'}}> 
        <Counter />
        <TodoList />
    </div>,
    document.getElementById('root')
)

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};