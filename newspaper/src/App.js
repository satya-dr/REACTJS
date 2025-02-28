
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News'
import{
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
           <NavBar/>
           <Routes>
               <Route exact path="/" element={<News key="general" pageSize={8} country={"us"} catagory="general"/>} />
               <Route exact path="/business" element={<News key="business" pageSize={8} country={"us"} catagory="business"/>} />
               <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country={"us"} catagory="entertainment"/>} />
               <Route exact path="/general" element={<News key="general" pageSize={8} country={"us"} catagory="general"/>} />
               <Route exact path="/health" element={<News key="health" pageSize={8} country={"us"} catagory="health"/>} />
               <Route exact path="/science" element={<News key="science" pageSize={8} country={"us"} catagory="science"/>} />
               <Route exact path="/sports" element={<News key="sports" pageSize={8} country={"us"} catagory="sports"/>} />
               <Route exact path="/technology" element={<News key="technology" pageSize={8} country={"us"} catagory="technology"/>} />
           </Routes>
        </Router>
      </div>
    )
  }
}
