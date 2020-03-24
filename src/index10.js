import React from 'react';
import './App.css';
// hash模式和history模式，history需要后端配合
import {HashRouter as Router, Link, Route} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>ad首页</h1>
    </div>
  )
}

function Me(props) {
  console.log('props', props);
  return (
    <div>
      <h1>ad我的</h1>
    </div>
  )
}

function Product() {
  return (
    <div>
      <h1>ad产品</h1>
    </div>
  )
}

function News(props) {
  return (
    <div>
      <h1>新闻id:</h1>
      <h1>{props.match.params.id}</h1>
    </div>
  )
}

// 函数式组件
function App() {
  let meObj = {
    pathname: '/me',
    search: '?username=admin',
    state: {
      msg: 'hello'
    }
  };
  return (
    <div id="app">
      <div>所有页面都会显示</div>
      <Router>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to={meObj}>个人中心</Link>
          <Link to='/product'>产品</Link>
          <Link to='/news/123'>新闻</Link>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/me" exact component={Me}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/news/:id" exact component={News}/>
      </Router>
    </div>
  );
}

export default App;
