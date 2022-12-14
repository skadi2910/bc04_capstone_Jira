import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./styles/customCss/allStyle.jsx";
import Home from "./components/Cyberbugs/Home";
import Loading from "./components/Loading/Loading";
import CreateProject from "./pages/Cyberbugs/CreateProject/CreateProject";
import ProjectDetail from "./pages/Cyberbugs/ProjectDetail/ProjectDetail";
import ProjectManagement from "./pages/Cyberbugs/ProjectManagement/ProjectManagement";
import UserManagement from "./pages/Cyberbugs/UserManagement/UserManagement";
import Login from "./pages/User/Login/Login";
import Signup from "./pages/User/Signup/Signup";
// import Admin from "./components/Admin/Admin";
// import Home from "./components/User/Main/Home/Home";
// import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import CyberBugsTemplate from "./templates/CyberBugsTemplate/CyberBugsTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import CreateUser from "./pages/Cyberbugs/UserManagement/CreateUser/CreateUser";
import UpdatingAnimation from "./pages/Cyberbugs/Updating/UpdatingAnimation";
import { useMediaQuery } from "react-responsive";
import Updating from "./pages/Cyberbugs/Updating/Updating";
export const history = createBrowserHistory({ window });
function App() {
  const isTabletOrLaptop = useMediaQuery({
    query: "(min-width: 767px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <>
      <Loading />
      <HistoryRouter history={history}>
        {isMobile && <Updating />}
        {isTabletOrLaptop && (
          <Routes>
            <Route
              path="/"
              element={<CyberBugsTemplate Component={ProjectManagement} />}
            />
            <Route
              path="/projectmanagement"
              element={<CyberBugsTemplate Component={ProjectManagement} />}
            />
            <Route
              path="/projectdetail/:id"
              element={<CyberBugsTemplate Component={ProjectDetail} />}
            />
            <Route
              path="/createproject"
              element={<CyberBugsTemplate Component={CreateProject} />}
            />
            <Route
              path="/usermanagement"
              element={<CyberBugsTemplate Component={UserManagement} />}
            />
            <Route
              path="/usermanagement/createuser"
              element={<CyberBugsTemplate Component={CreateUser} />}
            />

            <Route path="/login" element={<UserTemplate Component={Login} />} />
            <Route
              path="/signup"
              element={<UserTemplate Component={Signup} />}
            />
          </Routes>
        )}
      </HistoryRouter>
    </>
  );
}

export default App;
