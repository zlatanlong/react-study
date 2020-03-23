import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((a, b) => {
        console.log('第一个参数state', a);
        console.log('第二个参数props', b)
      }
    );
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      })
    );
  }

  render() {
    return (
      // <button onClick={() => this.handleClick()}>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

let user = {gender: 1};
user.name = 'Bob';
ReactDOM.render(
  <Toggle chuancan='传参' hah={user}/>,
  document.getElementById('root')
);
