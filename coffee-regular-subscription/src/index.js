import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 가 저절로 <App />을 감싸는데, 이게 있으면 
  // 개발 모드에서 두 번 렌더링이 되어서, 개발 중에 console.log가 
  // 두 번 출력되는 현상이 발생함.
  // 그래서 이걸 제거함.
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
