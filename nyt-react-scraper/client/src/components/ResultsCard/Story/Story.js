import React from "react";
import { Card } from "antd";
import { cardstyles } from "./Storystyle";

const Story = props => (
  <a href={props.url} target="_blank" rel="noopener noreferrer">
    <Card
      title={props.title}
      // extra={<a href="#">More</a>}
      style={cardstyles}
    >
      {props.snippet}
    </Card>
  </a>
);

export default Story;
