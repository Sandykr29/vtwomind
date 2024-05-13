import React from 'react';
import { Listing } from './component/testfiles/Test';
import { data } from './data';
import "./App.css"

function App() {
  return (
    <div className="App">
    
     <h2>Breadcrumb Assignment</h2>
     <br/>
     <hr/>
      <Listing data={data}/>
    </div>
  );
}

export default App;
