import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Cyberbugs/Home";
import CreateProject from "./pages/CreateProject/CreateProject";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import UserManagement from "./pages/UserManagement/UserManagement";
// import Admin from "./components/Admin/Admin";
// import Home from "./components/User/Main/Home/Home";
// import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import CyberBugsTemplate from "./templates/UserTemplate/CyberBugsTemplate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CyberBugsTemplate Component={ProjectManagement} />} />
          <Route path='/projectdetail/:id' element={<CyberBugsTemplate Component={ProjectDetail} />} />
          <Route path='/createproject' element={<CyberBugsTemplate Component={CreateProject} />} />
          <Route path='/usermanagement' element={<CyberBugsTemplate Component={UserManagement} />} />

          {/* <Route path='/admin' element={<AdminTemplate Component={Admin} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
