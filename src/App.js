import React, { Component } from "react";
import NavBar from "./components/navbar"
import Sidebar from "./components/sidebar";

class App extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <NavBar
        />
        <Sidebar
        />
        <main className="centerPage">
        </main>
      </div>
    );
  }
}

export default App;
