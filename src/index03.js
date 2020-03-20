import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let time = new Date().toLocaleDateString()
let str = '当前时间是'
let element = (
  <div>
    <h1>hello world</h1>
    <h2>{str + time}</h2>
  </div>
)

let man = '发热'
let element2 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === '发热'?<button>隔离</button>:'躺床上'}</h2>
  </div>
)

man = '正常'
let element4 = (
  <div>
    <span>横着躺</span>
    <span>竖着躺</span>
  </div>
)
let element3 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === '发热'?<button>隔离</button>:element4}</h2>
  </div>
)

let color = 'bgRed'
let baidusrc = 'https://www.baidu.com/img/baidu_jgylogo3.gif'
let element5 = (
  <div className={color}>
    <img src={baidusrc}/>
    红色的背景色
  </div>
)

console.log(element3)
ReactDOM.render(
  element5,
  document.getElementById('root')
)