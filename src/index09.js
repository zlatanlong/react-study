import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3]
    }
  }

  render() {
    return (
      <Parent>
        <h2 data-name="a" data-index={this.state.arr[0]}>从根调用插入1</h2>
        <h2 data-name="b" data-index={this.state.arr[1]}>从根调用插入2</h2>
        <h2 data-name="c" data-index={this.state.arr[2]}>从根调用插入3</h2>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3]
    }
  }

  render() {
    return (
      <div>
        <h1>Parent</h1>
        {this.props.children}
        <Child>
          <h2>组件插槽</h2>
          <h3 data-position="header">这是头部</h3>
          <h3 data-position="main">这是主要</h3>
          <h3 data-position="footer">这是尾部</h3>
        </Child>
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    let headerCom, mainCom, footerCom;
    let ComList = this.props.children; // 这是从父组件调用时候插进来的List

    ComList.forEach((item, index) => {
      if (item.props['data-position'] === 'header') {

        headerCom = item
      } else if (item.props['data-position'] === 'main') {
        mainCom = item
      } else if (item.props['data-position'] === 'footer') {
        footerCom = item
      }
    });

    return (
      <div>
        <div className="header">
          {headerCom}
        </div>
        <div className="main">
          {mainCom}
        </div>
        <div className="footer">
          {footerCom}
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Root/>, document.getElementById('root'));
