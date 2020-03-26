import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';


// 用于产生动作 必须对对象赋予新的值
const reducer = function (state = { num: 0 }, action) {
  switch (action.type) {
    case 'add':
      state.num++;
      break;
    default:
  }
  return { ...state }
};

const store = createStore(reducer);

// 将state映射到props函数
function mapStateToProps(state) {
  return {
    value: state.num
  }
}
// 将修改state数据的方法映射到props, 默认会传入store里的dispatch方法
function mapDispatchToProps(dispath) {
  return {
    onAddClick: () => { dispath(addAction) }
  }
}
// 将上面的2个方法，讲数据仓库的state和修改state的方法映射到组件上。形成新的组件

const addAction = {
  type: 'add'
}



class Counter extends React.Component {
  render() {
    // 计数通过store的state传给props，直接通过props就可以将state的数据获取
    const value = this.props.value;
    // 将修改数据的时间或者方法传入props
    const onAddClick = this.props.onAddClick;
    return (
      <div>
        <h1>计数的数量是：{value}</h1>
        <button onClick={onAddClick}>数字+1</button>
      </div>
    )
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));




