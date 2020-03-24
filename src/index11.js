import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import Redux, {createStore} from 'redux'

// 用于产生动作 必须对对象赋予新的值
const reducer = function (state = {num: 0}, action) {
  switch (action.type) {
    case 'add':
      state = {...state, num: state.num + action.howMany};
      break;
    case 'cut':
      state = {...state, num: state.num - 1};
      break;
    default:
  }
  console.log('state', state);
  return state
};

const store = createStore(reducer);
console.log('store', store);


function add() {
  // 通过仓库的方法dispatch进行修改数据
  store.dispatch({type: 'add',howMany: 2});
}

function cut() {
  // 通过仓库的方法dispatch进行修改数据
  store.dispatch({type: 'cut'});
}


const Counter = function (props) {
  let count = store.getState().num;
  return (
    <div>
      <h1>计数数量{count}</h1>

      <button onClick={add}>计数 + 2</button>
      <button onClick={cut}>计数 - 1</button>
    </div>
  )
};

store.subscribe(()=> {
  ReactDOM.render(<Counter/>, document.getElementById('root'));
});
ReactDOM.render(<Counter/>, document.getElementById('root'));




