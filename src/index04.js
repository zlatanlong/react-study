import React from 'react';
import ReactDOM from 'react-dom';
import './04study.css'

// 引号引起来 或者驼峰
let exampleStyle = {
  background: "skyblue",
  borderBottom: "3px solid red",
  'background-image': "url(https://www.baidu.com/img/baidu_jgylogo3.gif)"
}

let element = (
  <div>
    <h1 style={exampleStyle}>hellow</h1>
  </div>
)

let classStr = 'redBg'
let element2 = (
  <div>
    <h1 className={"abc "+classStr}>hellow</h1>
  </div>
)

// 放两个类
classStr = ['redBg2','abc2'].join(' ')
let element3 = (
  <div>
    {/*这里写注释 */}
    <h1 className={classStr} style={exampleStyle}>hellow</h1>
  </div>
)

ReactDOM.render(
  element3,
  document.querySelector('#root')
)