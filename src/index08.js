import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    // 这个事件对象是代理的原生的对象，若想查看具体值，直接输出
    console.log(e);
    e.preventDefault() // 相当于原生js的return false
  };
  handleClick2 = (msg, e) => {
    console.log(msg);
    console.log(e)
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>hello</h1>
        </button>
        <button onClick={(e) => {
          this.handleClick2('world', e)
        }}>
          <h1>hello2</h1>
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent chuancan='传参'/>,
  document.getElementById('root')
);
