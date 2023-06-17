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
import AddProject from './Components/AddProject/AddProject';
import ProjectsHome from './Components/ProjectsHome/ProjectsHome';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';



function App() {
  return (
    <Router>
    <div className="App">
       <NavbarMain/>
       
        <div className='routemain'>
       <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/addproject" element={<AddProject/>} />
          <Route path="/projects" element={<ProjectsHome/>} />
          <Route path="/projects/:id" element={<ProjectDetail/>} />
          
      </Routes>
      
      </div>

    </div>
    </Router>
  );
}

export default App;
