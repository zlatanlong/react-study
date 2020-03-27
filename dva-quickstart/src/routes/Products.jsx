import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    // type自动映射到model中对应namespace为prodects
    // 的delete方法
    // dispatch的参数是一个action
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  const handleSetName = () => {
    dispatch({
      type: "products/setName",
      data: {
        name: 'lcl'
      },
      data2: {
        gender: 'male'
      }
    })
  }
  const handleSetNameAsync = () => {
    dispatch({
      type: "products/setNameAsync",
      data: {
        name: 'wsy'
      },
    })
  }
  return (
    <div>
      <button onClick={handleSetName}>SetName</button>
      <button onClick={handleSetNameAsync}>SetNameAsync</button>
      <p>{products.name}</p>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products.data} />
    </div>
  );
};

/**
 * 把传递的对象products属性单独拿出来再封装出去
 * @param {包含products属性的对象} param0 
 */
const mapFun = ({products}) => ({products})
//export default Products;
//connect(f1)(Com1)通过函数f1,将model中的值转递到组件Com1的参数中
export default connect(
  mapFun
)(Products);