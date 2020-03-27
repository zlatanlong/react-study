import React from 'react';
import './App.css';
// hash模式和history模式，history需要后端配合
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'

function LoginInfo(props) {
  console.log('', props);

  if (props.location.state.loginInfo === 'success') {
    return (
      <Redirect to='/admin'/>
    )
  }
  return (
    <Redirect to='/login'/>
  )
}

function Home(props) {
  console.log(props);

  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me(props) {
  return (
    <div>
      <h1>admin</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>登录</h1>
    </div>
  )
}

function Form(props) {
  let to = {
    pathname: '/loginInfo',
    state: {
      loginInfo: 'success'
    }
  };
  return (
    <div>
      <h1>表单</h1>
      <Link to={to}>登录</Link>
    </div>
  )
}

class ChildCom extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>跳转到首页</button>
      </div>
    )
  }

  clickEvent = () => {
    this.props.history.push("/", {msg: '这是由child发给首页的数据'});
  }
}


// 函数式组件
function App() {
  let meObj = {
    pathname: '/form',
    search: '',
    state: {
      msg: 'hello'
    }
  };
  return (
    <div id="app">
      <div>所有页面都会显示</div>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/admin" component={Me}/>
          <Route path="/login" component={Login}/>
          <Route path="/form" component={Form}/>
          <Route path='/logininfo' component={LoginInfo}/>
          <Route path='/child' component={ChildCom}/>
        </Switch>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to={meObj}>表单</Link>
          <Link to='/admin'>admin</Link>
          <Link to='/login'>登录</Link>
          <Link to='/child'>child</Link>
        </div>

      </Router>
    </div>
  );
}

export default App;
