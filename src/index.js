import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = "http://94.237.3.78:4000/api/"
axios.defaults.headers.common['Authorization'] = 'Bearer :' + localStorage.getItem('token');

// axios.defaults.baseURL = "http://94.237.3.78:4000/api/"
// axios.defaults.headers.common['Authorization'] = 'Bearer :' + localStorage.getItem("tokens",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIyZWM2OWRkMWE5OGVkN2I3M2RlYmU2IiwiaWF0IjoxNjQ3MjU3Njg5LCJleHAiOjE2NDczNDQwODl9.iXY3ia5LxbWW0Jqi106cfSN7Q_PUdDm3SljF-m8N4o8');
// //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIyZWM2OWRkMWE5OGVkN2I3M2RlYmU2IiwiaWF0IjoxNjQ3MjU3Njg5LCJleHAiOjE2NDczNDQwODl9.iXY3ia5LxbWW0Jqi106cfSN7Q_PUdDm3SljF-m8N4o8


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
