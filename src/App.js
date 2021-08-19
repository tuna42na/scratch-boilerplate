import React from "react";
import { hot } from "react-hot-loader";
import Philosophy from "./components/philosophy";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Well would ya look at that?!</h1>
        <Philosophy />
      </>
    );
  }
}

export default hot(module)(App);
