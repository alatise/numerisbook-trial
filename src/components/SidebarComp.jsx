import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/sidebar/logo.svg";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/getting-started",
      icon: <img src="/src/assets/sidebar/started.svg" />,
      label: "Getting Started",
    },
    {
      key: "/overview",
      icon: <img src="src/assets/sidebar/overview.svg" />,
      label: "Overview",
    },
    {
      key: "/accounts",
      icon: <img src="src/assets/sidebar/started.svg" />,
      label: "Accounts",
    },
    {
      key: "/invoice",
      icon: <img src="src/assets/sidebar/invoice.svg" />,
      label: "Invoice",
    },
    {
      key: "/beneficiary",
      icon: <img src="src/assets/sidebar/beneficiary.svg" />,
      label: "Beneficiary Management",
    },
    {
      key: "/help-center",
      icon: <img src="src/assets/sidebar/help.svg" />,
      label: "Help Center",
    },
    {
      key: "/settings",
      icon: <img src="src/assets/sidebar/setting.svg" />,
      label: "Settings",
    },
  ];

  return (
    <Sider width={280} className="fixed bg-white overflow-hidden  ">
      <div className="logo p-4 bg-white pt-10">
        <img src={logo} alt="" />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        className="h-full custom-sidebar-menu"
      />
    </Sider>
  );
};

export default Sidebar;
