import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/ko_KR';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider
        locale={{
          ...locale,
          // Pagination: localeEn.Pagination,
        }}
      >
        <App />
      </ConfigProvider>
    </RecoilRoot>
=======

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
>>>>>>> parent of 8b7e9355 (fix : 버전 변경으로 인한 antd 테마 설정 변경)
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
