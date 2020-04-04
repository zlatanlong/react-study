import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let root = document.getElementById('root')

// JSX syntax
{/* <App /> simple object */}
let app = <App />
let h1 = <h1 className="test">hello</h1>
ReactDOM.render(h1, root);