import React, { Component } from "react"
import ColourIndex from './ColourIndex'
import { getAllColours } from "services/ColoursData";

let colours;
getAllColours().then(
  (result) => { colours = result}
);

class ColourIndexConnector extends Component {
  
  //
  // Render

  render() {
    return (
      <ColourIndex 
        data={colours}
        columns={colours.keys}
      />
    );
  }
}

export default ColourIndexConnector;
