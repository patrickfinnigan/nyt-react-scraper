import React, { Component } from "react";
import NavCard from "./components/NavCard/NavCard";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ResultsCard from "./components/ResultsCard/ResultsCard";
import { NYT_API_KEY } from "./config/keys";

class App extends Component {
  state = {
    topicBox: "",
    startDate: "",
    endDate: "",
    data: null,
    savedData: []
  };

  handleChange = event => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSave = event => {
    console.log("saved?", event);
    const savedArticle = this.state.data.find(article => article._id === event);
    console.log(savedArticle);
    fetch("/save", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(savedArticle)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const savedData = this.state.savedData;
        savedData.push(data);
        this.setState({
          savedData
        });
      });
  };

  handleClick = () => {
    console.log("Clicked topic: ", this.state);
    const { topicBox, startDate, endDate } = this.state;
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API_KEY}&q=${topicBox}&begin_date=${startDate}&end_date=${endDate}`;
    fetch(URL)
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.response.docs
        })
      );
  };

  handleDateChange = date => {
    this.setState({
      startDate: date[0].format("YYYYMMDD"),
      endDate: date[1].format("YYYYMMDD")
    });
  };

  render() {
    console.log('data', this.state.data, 'savedData', this.state.savedData);
    return (
      <Layout>
        <NavCard
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          value={this.state.topicBox}
          handleDateChange={this.handleDateChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <br />
        {this.state.data ? (
          <ResultsCard data={this.state.data} handleSave={this.handleSave} />
        ) : (
          ""
        )}
        <br />
        <h1>Saved Articles</h1>
        {this.state.savedData ? (
          <ResultsCard data={this.state.savedData} handleSave={null} />
        ) : (
          ""
        )}
      </Layout>
    );
  }
}

export default App;
