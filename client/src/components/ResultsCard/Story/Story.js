import React from "react";
import { Card, Button } from "antd";
import { cardstyles, buttonstyles, textstyles } from "./Storystyle";

const Story = props => {
  const clickHandler = id => {
    return (props.handleSave) ? props.handleSave(id) : props.handleDelete(id);
  } 
  return (
    <Card
      title={props.title}
      extra={<a href={props.url}>Link</a>}
      style={cardstyles}
    >
      <div style={textstyles}>{props.snippet}</div>
      <Button
        type= {(props.handleSave) ? "primary" : "danger"}
        className="saveButton"
        style={buttonstyles}
        onClick={() => clickHandler(props.id)}
      >
        { (props.handleSave) ? "Save" : "Delete"}
      </Button>
    </Card>
  );
};

export default Story;
