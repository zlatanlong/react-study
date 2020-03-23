import React from 'react';
import './App.css';
// hash模式和history模式，history需要后端配合
import {HashRouter as Router, Link, Route} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me() {
  return (
    <div>
      <h1>我的</h1>
    </div>
  )
}

// 函数式组件
function App() {
  return (
    <div id="app">
      <Router basename="/">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/me">个人中心</Link>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/me" exact component={Me}/>
      </Router>
    </div>
  );
}

export default App;
