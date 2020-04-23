import React from "react";
import Home from "./components/home";
import Entry from "./components/entry";
import Footer from "./components/footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/entry/:id" exact component={Entry} />    
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
