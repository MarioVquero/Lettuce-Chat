import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import SubmitBlog from './pages/SubmitBlog'
import NoPage from './pages/NoPage'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='Profile'  element={<Profile/>} />
          <Route path='SubmitBlog'  element={<SubmitBlog/>} />
          <Route path='*'element={<NoPage/>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
