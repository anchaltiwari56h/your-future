import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home.jsx";
import Stream from './stream.jsx';
import Science from './stream/science.jsx';
import Arts from './art/overview.jsx';
import Vocational from './stream/vocational.jsx';
import DetailSci from './stream/tech.jsx';
import Defence from './stream/defence.jsx';
import Exam from './stream/exam.jsx';
import Medical from './bioStream/medical.jsx';
import Allied from './bioStream/allied.jsx';
import Research from './bioStream/reserch.jsx';
import Commerce from './commerce/overview.jsx';
import Professional from './commerce/ca.jsx';
import Detail from './art/detail.jsx';
import VocDet from './stream/vocDet.jsx';
import Buisness from './commerce/buisness.jsx'
import About from './nav-foot/about.jsx';
import PrivacyPolicy from './nav-foot/privacy.jsx';
import Terms from './nav-foot/term.jsx';
import Help from './nav-foot/help.jsx';


 function App() {
  return(
    <>
     <div className="absolute top-0 left-0 w-full h-full">
      
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/stream/science" element={<Science />} />
        <Route path="/stream/arts" element={<Arts />} />
        <Route path="/stream/vocational" element={<Vocational />} />
         <Route path="/stream/science/tech" element={<DetailSci/>} />
         <Route path="/stream/science/defence" element={<Defence/>} />
         <Route path="/stream/science/exam" element={<Exam />} />
         <Route path="/stream/science/medical" element={<Medical/>} />
         <Route path="/stream/science/allied" element={<Allied />} />
         <Route path="/stream/science/research" element={<Research />} />
         <Route path="/stream/commerce" element={<Commerce/>} />
         <Route path="/stream/commerce/buisness" element={<Buisness/>} />
        <Route path="/stream/commerce/CA" element={<Professional />} />
        <Route path="/stream/arts/detail" element={<Detail />} />
        <Route path="/stream/vocational/in-detail" element={<VocDet/>} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/help" element={<Help/>} />
        
        </Routes>
    </Router>
   </div>
    </>
  )
  
}

export default App;