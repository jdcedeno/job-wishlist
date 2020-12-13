import React, {Component} from "react";
import "./App.css";
import JobCard from "./components/JobCard"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="App">
      {"hola mundo!"}
      <JobCard number="1" />
    </div>);
  }
}

export default App;
