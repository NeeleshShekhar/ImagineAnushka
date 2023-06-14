import logo from './logo.svg';
import './App.css';
import NavbarMain from './Components/Nav/nav';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Header from './Components/header/header';
import { ContactUs } from './Components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
       <NavbarMain/>
       
        <div className='routemain'>
       <Routes>
       <Route path="/" element={<Header/>} />
       <Route path="/contactus" element={<ContactUs/>} />
      
      </Routes>
      </div>

    </div>
    </Router>
  );
}

export default App;
