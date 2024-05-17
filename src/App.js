import './App.css';
import ReactDOM from 'react-dom';
import React, {useState} from "react";
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Card from './components/Card'
import AccessoriesEditPost from './components/AccessoriesEditPost';
import BabiesCreatePost from './components/BabiesCreatePost';
import BabiesHome from './components/BabiesHome';
import BabiesPostDetails from './components/BabiesPostDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
          <Route exact path="/" element={<AccessoriesEditPost />} />
          <Route path="/" element={<AccessoriesEditPost />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/Edit-post" element={<AccessoriesEditPost />} />
          <Route path="/dashboard/babies" element={<BabiesHome />}/>
          <Route path="/dashboard/babies/add" element={<BabiesCreatePost />}/>
          <Route path="/dashboard/babies/post/:id" element={<BabiesPostDetails />} />

          </Routes>
        </div>
      </BrowserRouter>
 
    );
  }
}

export default App;

