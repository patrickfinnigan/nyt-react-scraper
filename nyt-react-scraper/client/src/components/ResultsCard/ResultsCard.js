import React from "react";
// import { Card } from "antd";
// import { cardstyles } from "./ResultsCardStyle";
import Results from './Results';

const ResultsCard = props => {
  console.log("props.data", props.data); // the results from the NYTimes API
  return (
    <Results
      title="Results"
      // extra={<a href="#">More</a>}
      style={cardstyles}
    >
      {props.children}
      {/* {PromiseProvider.children}<div></div> */}
    </Results>
  );
};

export default ResultsCard;
