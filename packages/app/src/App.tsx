import React, { useState } from 'react';
import './App.css';
import { ACS1YearVintage, ACSProduct, State } from "@react-census/types";
import { DataTable } from "@react-census/data-table"
import { TableBrowser } from '@react-census/table-browser'

function App() {
  const [selectedVariables, setSelectedVariables] = useState<string[]>(['B08526_104E','B08526_105E'])

  console.log("selected ", selectedVariables)

  const toggleVariable = (variable: string): void => {
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter(v => v !== variable))
    }
    else {
      setSelectedVariables([...selectedVariables, variable])
    }
  }

  const query = {
    vintage: ACS1YearVintage.ACS_2015,
    product: ACSProduct.ACS1Year,
    variables: ["NAME", ...selectedVariables],
    geoHierarchy: { state: State.NewYork, county: "*" },
    geoResolution: "500k"
  }

  return (
    < div className="App" >
      <h1>Are we monorepo yet?</h1>
      {/* <TableBrowser selectedVariables={selectedVariables} onSelectVariable={toggleVariable} /> */}
      <div style={{width:'40%'}}>
        <DataTable {...query} />
      </div>
    </div>
  );
}

export default App;
