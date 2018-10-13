import React from "react";
// import { Card } from "antd";
// import { cardstyles } from "./ResultsCardStyle";
import Story from './Story/Story';

const ResultsCard = props => {
  console.log("props.data", props.data); // the results from the NYTimes API
  const stories = props.data.map(story => <Story title={story.headline.main} url={story.web_url} snippet={story.snippet} key={story._id} />);
  return stories;
};

export default ResultsCard;
