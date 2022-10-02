import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Home from "./components/User/Main/Home/Home";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<UserTemplate Component={Home} />} />



        <Route path='/admin' element={<AdminTemplate Component={Admin} />} />

      </Routes>
    </BrowserRouter>

  </div>;
}

export default App;
