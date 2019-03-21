import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import Contact from "./Components/contact";
import Pricing from "./Components/pricing";
import Whatwedo from "./Components/whatwedo";
import Home from "./Components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home/>
        <Whatwedo id="whatwedo"/>
        <Pricing id="pricing"/>
        <Contact id="contact" />
        
      </div>
    );
  }
}

export default App;
