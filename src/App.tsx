import React, { useState } from 'react';
import './App.css';
import { useACS } from './hooks/useACS'
import { ACS1YearVintage, ACSProduct, State } from "./globaltypes";
import { DataTable } from "./Components/DataTable"
import { PopulationPyramid } from './Components/PopulationPyramid'
import { TableBrowser } from './Components/TableBrowser'

function App() {


  const [selectedVariables, setSelectedVariables] = useState<string[]>([])

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
      <TableBrowser selectedVariables={selectedVariables} onSelectVariable={toggleVariable} />

      <DataTable {...query} />
    </div>
  );
}

export default App;
