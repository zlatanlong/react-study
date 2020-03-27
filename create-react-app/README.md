This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React 学习项目
学习网站[react官方中文文档](https://react.docschina.org/)
- jingziqi 官网井字棋小游戏
- index02 初识react
- index03 条件渲染
- index04 样式渲染
- index05 组件(类组件，函数组件，嵌套)
- index06 state 相当于vue的data，但是使用方式和vue不一样, 生命周期
- index07 事件处理绑定 setState的参数
- index08 事件传参数
- index09 插槽
- index10 路由
- index11 状态管理redux
- index12 react-redux

子传父: 通过**调用父的函数**从而操纵父的数据

react事件名是用驼峰写法，并且函数要写在{}中
## 路由：
route replace 替换路由 不能后退
动态路由：
```jsx harmony
<Route path="/news/:id" exact component={News}/>

<Link to='/news/123'>新闻</Link>
// 组件中
{props.match.params.id}
```

## 重定向：
<Switch> 只显示一个
<Redirect to='/admin'/> 重定向

## react-redux
Provider 将store和App(根组件进行关联)
MapStatetoProps: 这个函数用于将store的state映射到组件的props里

connect: 将组件和数据(方法)进行连接

初始化：reducer和store