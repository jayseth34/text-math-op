import './App.css';
import Texted from './components/Texted';
import Navbar from './components/Navbar';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Operation from './components/Operation';


function App() {
  return (
    <>
    {/* <div className="blank">bhajiye khao bhai</div> */}
    
    <Router>
    <Navbar />
    <div className="container my-3">
    <Routes>
      <Route exact path='/SmartText/' element={<Home />} />
    </Routes>
    <Routes>
      <Route exact path='/textAnalyzer' element={<Texted />} />
    </Routes>
    <Routes>
      <Route exact path='/mathoperation' element={<Operation />} />
    </Routes>
    </div>
    {/* <Texted bol='hello' /> */}
    </Router>
    </>
  );
}
export default App;
