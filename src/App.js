import React, { Component } from "react";
import RootProvider from "./RootProvider";
import StarWars from "./containers/StarWars";

class App extends Component {
  render() {
    return (
      <RootProvider>
        <StarWars />
      </RootProvider>
    );
  }
}

export default App;
