import DashboardLoginPage from "./Pages/DashboardLoginPage";
import { ThemeProvider } from "@mui/material/styles";
import dashboardTheme from "./dashboardTheme";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import OrderHistory from "./Pages/OrderHistory";
import ReturnHistory from "./Pages/ReturnHistory"


function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<DashboardLoginPage />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/return-history" element={<ReturnHistory />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*">"404 Not Found"</Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
