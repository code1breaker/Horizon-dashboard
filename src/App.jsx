import Sidebar from "./components/Sidebar";
import CarInterface from "./pages/dashboard/CarInterface";
import MainDashboard from "./pages/dashboard/MainDashboard";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SmartHome from "./pages/dashboard/SmartHome";
import MarketPlace from "./pages/nft/MarketPlace";
import NftPage from "./pages/nft/NftPage";
import Kanban from "./pages/application/Kanban";
import Chart from "./pages/application/Chart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Signin from "./pages/authentication/Signin";
import Signup from "./pages/authentication/Signup";
import { useEffect, useState } from "react";
import DarkModeContext from "./constants/darkModeContext";
import { SidebarContextProvider } from "./constants/SidebarContextProvider";

function App() {
  const body = document.body;
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    theme == "dark" && body.classList.add("dark");
    theme == "light" && body.classList.remove("dark");
  }, [theme]);

  const location = useLocation();
  const hideSidebar =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <Provider store={store}>
      <SidebarContextProvider>
        <DarkModeContext.Provider value={{ theme, setTheme }}>
          <div className="bg-gray-100 dark:bg-[#0c1435] flex overflow-x-clip">
            {hideSidebar ? null : <Sidebar />}
            <Routes>
              <Route path="/" element={<Navigate to="/main-dashboard" />} />
              <Route path="/main-dashboard" element={<MainDashboard />} />
              <Route path="/car-interface" element={<CarInterface />} />
              <Route path="/smart-home" element={<SmartHome />} />
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/nft-page" element={<NftPage />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/chart" element={<Chart />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </DarkModeContext.Provider>
      </SidebarContextProvider>
    </Provider>
  );
}

export default App;

// website demo link
// https://horizon-ui.com/chakra-pro/#/admin/dashboards/default
