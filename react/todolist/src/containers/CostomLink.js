import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function CostomLink() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }



function OldSchoolMenuLink({to,locatin,lable,active}){//都是对象...传过来  props  下面就props. 这里直接把props解构赋值了
    let isActive=props.to===props.location.pathname;
    return (
        <li className={isActive?'actove':''}>
            <Link exact ={activeOnlyWhenExact} to={to}></Link>
        </li>
    ) 
}
const OldLink =withRouter(OldSchoolMenuLink);//高阶函数 传给OLdLink  直接使用OldLink

function Home(props){
    console.log(props);
    return <h2>Hemo组件</h2>
}
function About(){
    return <h2>Hemo组件</h2>
}
export default CostomLink;
