import React, { Component } from "react";
import NavCard from "./components/NavCard/NavCard";
import "./App.css";
import 'antd/dist/antd.css'
import { Layout, Button } from "antd";
import ResultsCard from "./components/ResultsCard/ResultsCard";
import Results from "./components/ResultsCard/Results/Results";

class App extends Component {
  
  
  handleClick() {
    // e.preventDefault();
    console.log(`Button pressed`);
  }


  render() {
    return (
      <Layout>
          <NavCard>
          <Button type="primary" className="searchButton" onClick={() => this.handleClick()}>Search</Button>
          </NavCard>
          <br></br>
          <ResultsCard>
            <Results>

            </Results>
          </ResultsCard>
          <br></br>
      </Layout>
    );
  }
}

export default App;
