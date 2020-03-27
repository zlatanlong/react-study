import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';

// let root = document.getElementById('root')

// JSX syntax
// <App /> simple object
// let app = <App />
// let h1 = <h1>hello</h1>
// ReactDOM.render(h1, root);


// 实现页面时刻的显示

// function clock(params) {
//   let time = new Date().toString()
//   let element = (
//     <div>
//       <h1>现在时间是：{time}</h1>
//       <h2>这是副标题 </h2>
//     </div>
//   )
//   ReactDOM.render(element, root)
// }
// setInterval(clock, 1000)

// react 函数式组件传递参数(大写)
function Clock(props) {
  return (
    <div>
      <h1>现在时间是：{props.data.toLocaleTimeString()}</h1>
      <h2>这是函数式组件开发</h2>
    </div>
  )
}

function run() {
  ReactDOM.render(
    <Clock data={new Date()}/>,
    document.querySelector('#root')
  )
}

setInterval(run, 1000)
