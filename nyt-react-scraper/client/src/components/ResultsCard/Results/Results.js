import React from "react";
import { Card } from "antd";
import { cardstyles } from "./ResultsStyle";

const Results = props => (
  <Card
    title="A Story"
    // extra={<a href="#">More</a>}
    style={cardstyles}
  >
    {props.story}
  </Card>
);

export default Results;
