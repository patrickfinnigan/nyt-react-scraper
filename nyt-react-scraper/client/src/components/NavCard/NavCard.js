import React from "react";
import { Card, Input, DatePicker, Button } from "antd";
import {cardstyles, textboxstyles} from "./NavCardStyle";

// console.log says the button was clicked

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}


// const styles = {
//   marginBottom: "2%"}; 
  // could import this from own file
const NavCard = () => (

  <Card
    title="NYT Article Scrubber"
    // extra={<a href="#">More</a>}
    style={cardstyles}
  >
    <Input style={textboxstyles} placeholder="Topic" />
    <RangePicker style={textboxstyles} onChange={onChange} />
    {/* <Button type="primary" className="searchButton" onClick={() => this.handleClick()}>Search</Button> */}
  </Card>
);

export default NavCard;
