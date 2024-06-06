import { Component } from "react";
import Opp from "./Opp.jsx";

class App extends Component{
  render(){
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a class Component</p>
        <Opp />
      </div>
    );
  }
}

export default App