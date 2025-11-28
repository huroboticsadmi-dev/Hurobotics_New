import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './docs/global.css';  // ✅ 전역 스타일 추가 (반드시 이 위치!)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
