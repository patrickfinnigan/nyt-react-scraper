import React, { Component } from "react";
import NavCard from "./components/NavCard/NavCard";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ResultsCard from "./components/ResultsCard/ResultsCard";
import Results from "./components/ResultsCard/Results/Results";
import { start } from "repl";

class App extends Component {
  state = {
    topicBox: "",
    startDate: "",
    endDate: "",
    data: null
  };

  handleChange = event => {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = () => {
    console.log("Clicked topic: ", this.state);
    const {topicBox, startDate, endDate} = this.state;
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${}&q=${topicBox}&begin_date=${startDate}&end_date=${endDate}`;
    fetch(URL).then(res => res.json()).then(data => this.setState({data}))
  }

  handleDateChange = (date) => {
    console.log(date)
    this.setState({
      startDate: date[0].toDate().format('YYYYMMDD'),
      endDate: date[1].toDate().format('YYYYMMDD'),
    })
  }

  render() {
    return (
      <Layout>
        <NavCard 
          handleChange={this.handleChange} 
          handleClick={this.handleClick}
          value={this.state.topicBox}
          handleDateChange={this.handleDateChange} 
          />
        <br />
        <ResultsCard data={data}>
          <Results />
        </ResultsCard>
        <br />
      </Layout>
    );
  }
}

export default App;
