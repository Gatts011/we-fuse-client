import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./fuse.css";

import Homepage from "./components/homepage";
import Entry from "./components/entry";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Banner/>
      <Route path="/" exact component={Homepage} />      
      <Route path="/entry/:id" exact component={Entry} />       
      <Footer/>
    </Router>
  );
}

export default App;
