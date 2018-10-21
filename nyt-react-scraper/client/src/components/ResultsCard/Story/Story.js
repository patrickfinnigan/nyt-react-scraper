import React from "react";
import { Card, Button } from "antd";
import { cardstyles, buttonstyles, textstyles } from "./Storystyle";

const Story = props => (
    <Card
      title={props.title}
      extra={<a href={props.url}>Link</a>}
      style={cardstyles}
    >
      <div
      style={textstyles}
      >
      {props.snippet}
      </div>
    <Button 
      type="primary" 
      className="saveButton" 
      style={buttonstyles}
      onClick={() => props.handleSave(props.id)}
      >
      Save
      </Button>
    </Card>
);

export default Story;
