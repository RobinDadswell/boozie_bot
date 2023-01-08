import React, { useEffect, Component, useMemo } from "react"
import ColourIndex from './ColourIndex'
import { getAllColours } from "services/ColoursData";
import PageHeader from "Components/Page/Header/PageHeader";
import Table from 'Components/Table/Table'

function ColourIndexConnector() {
  const columns = useMemo(
    () => [
      {
        Header: "Hex Code",
        accessor: "hex_code",
      },
      {
        Header: "Colour Name",
        accessor: "colour_name"
      }
    ],
    []
  )

  return (
    <PageHeader />,
      <Table 
        data={getAllColours()}
        columns={columns}
      />
      /*<ColourIndex 
      data={getAllColours()}
      columns={columns}
      />*/
  );
}

export default ColourIndexConnector;
