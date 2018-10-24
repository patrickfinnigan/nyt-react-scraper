import React from "react";
// import { Card } from "antd";
// import { cardstyles } from "./ResultsCardStyle";
import Story from "./Story/Story";
import { cardstyles } from "../NavCard/NavCardStyle";

const ResultsCard = props => {
  // console.log("props.data", props.data); // the results from the NYTimes API
  // console.log("props.handleDelete", props.handleDelete);
  const stories = props.data.map(story => (
    <Story
      title={story.headline ? story.headline.main : story.title}
      url={story.web_url}
      snippet={story.snippet}
      key={story._id}
      id={story._id}
      style={cardstyles}
      handleSave={props.handleSave}
      handleDelete={props.handleDelete}
    />
  ));
  return stories;
};

export default ResultsCard;
