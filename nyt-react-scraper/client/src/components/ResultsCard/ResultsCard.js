import React from "react";
import { Card } from "antd";
import {cardstyles} from "./ResultsCardStyle";
import { PromiseProvider } from "mongoose";

const ResultsCard = () => (
  <Card
    title="Results"
    // extra={<a href="#">More</a>}
    style={cardstyles}
  >
    {PromiseProvider.children}<div></div>
  </Card>
);

export default ResultsCard;