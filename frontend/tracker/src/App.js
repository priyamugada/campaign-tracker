import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CampaginForm from './CampaginForm';
import CampaginList from './CampaginList';
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CampaginForm/>} />
        <Route path="/track" element={<CampaginList/>}/>
      </Routes>
    </Router>
  )
}
export default App;