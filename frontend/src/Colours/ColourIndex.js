import React, { Component } from "react"
import PropTypes from 'prop-types';
import PageHeader from "Components/Page/Header/PageHeader"
import Table from "Components/Table/Table";

class ColourIndex extends Component {
  
  //
  // Render

  render() {
    const {
      data,
      columns
    } = this.props; 

    return (
      <PageHeader />,
      <Table 
        data={data}
        columns={columns}
      />
    );
  }
}

ColourIndex.prototype = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ColourIndex;
