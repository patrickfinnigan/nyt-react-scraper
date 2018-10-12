import React from "react";
import { Card, Input, DatePicker, Button } from "antd";
import {cardstyles, textboxstyles} from "./NavCardStyle";

// console.log says the button was clicked

const { RangePicker } = DatePicker;

// const styles = {
//   marginBottom: "2%"}; 
  // could import this from own file
const NavCard = props => (

  <Card
    title="NYT Article Scrubber"
    // extra={<a href="#">More</a>}
    style={cardstyles}
  >
    <Input 
      style={textboxstyles} 
      placeholder="Topic" 
      className="topicBox" 
      name="topicBox"
      value={props.value}
      onChange={props.handleChange}
      />
    <RangePicker 
      style={textboxstyles} 
      onChange={props.handleDateChange} 
      className="rangePickerBox" 
      />
    <Button 
      type="primary" 
      className="searchButton" 
      onClick={() => props.handleClick()}>Search</Button>
    {props.children}   
  </Card>
);

export default NavCard;
