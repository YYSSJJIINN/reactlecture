import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// App.js에 import해둔 내용들도 다 보인다.
import reportWebVitals from './reportWebVitals';

import Test3 from "./aaa"
// aaa의 함수를 Test03이라는 이름으로 사용하겠다는 뜻이다. 컴포넌트는 무조건 대문자로 만들어야한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
// const AA = () =>
root.render(
  // 같은 index.js에 적힌 function도 리액트 태그 안에 열닫태그로 작성해주고,
  // import한 것들도 열닫태그로 작성해준다.
  <React.StrictMode>
    <Test1 /><h2>안녕</h2><br></br>
    <Test2 />
    <Test3 />./aaa의 함수를 import할 때 만약 소문자로 하면 웹 브라우저에 표시되지 않는다.<br />
    <App />
  </React.StrictMode>
);
function Test2() {
  return<h3>Test02</h3>
}
function Test1() {
  return <h3>Test 1 컴포넌트</h3>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
