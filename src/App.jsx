import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/SidebarComp";
import HeaderComp from "./components/Header";
import Invoice from "./pages/Invoice";

const { Content } = Layout;

const LayoutWithHeader = () => {
  const location = useLocation();

  const routeTitles = {
    "/getting-started": "Getting Started",
    "/overview": "Overview",
    "/accounts": "Accounts",
    "/invoice": "Invoice",
    "/beneficiary": "Beneficiary Management",
    "/help-center": "Help Center",
    "/settings": "Settings",
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <HeaderComp
        title={routeTitles[location.pathname] || "Invoice"}
        className="flex-shrink-0"
      />
      <div className="flex-grow overflow-auto">
        <Content className="px-10 py-6 bg-[#F5F6FA] min-h-full">
          <Routes>
            <Route
              path="/getting-started"
              element={<div>Getting Started </div>}
            />
            <Route path="/overview" element={<div>Overview </div>} />
            <Route path="/accounts" element={<div>Accounts </div>} />
            <Route path="/invoice" element={<Invoice />} />
            <Route
              path="/beneficiary"
              element={<div>Beneficiary Management </div>}
            />
            <Route path="/help-center" element={<div>Help Center </div>} />
            <Route path="/settings" element={<div>Settings </div>} />
          </Routes>
        </Content>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Sidebar className="fixed h-full" />
        <Layout className="">
          <Routes>
            <Route path="/" element={<Navigate to="/invoice" />} />
            <Route path="*" element={<LayoutWithHeader />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
