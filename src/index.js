// import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App tab="home" />)

// ReactDOM.render(
//     <App />
//     ,
//   document.getElementById('root')
// );
