import React from 'react';
import ReactDOM from 'react-dom';
import './04study.css'


// 函数式组件
function Childcom(props) {
  console.log(props)
  let title = <h2>这是副标题</h2>
  let weather = props.weather
  let isGo = weather === '下雨' ? '不出门' : '出门'
  return (
    <div>
      <h1>hellow world!</h1>
      {title}
      <div>
        天气：
        <span>{weather}</span>
        ;是否出门:
        <span>{isGo}</span>
      </div>
    </div>
  )
}


// 类组件定义
// 动态展现数据的时候尽量用类组件
// 复合组件
class HellowWorld extends React.Component {
  render() {
    console.log(this)
    return (
      <div>
        <h1>类组件HellowWorld</h1>
        <span>hi: {this.props.name}</span>
        <Childcom weather={this.props.weather}/>
      </div>
    )
  }
}



// ReactDOM.render(
//   <Childcom weather = 'no下雨' />,
//   document.querySelector('#root')
// )
ReactDOM.render(
  <HellowWorld name='张三' weather='下雨'/>,
  document.querySelector('#root')
)