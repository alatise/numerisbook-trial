import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/sidebar/logo.svg";
import startedIcon from "../assets/sidebar/started.svg";
import overviewIcon from "../assets/sidebar/overview.svg";
import invoiceIcon from "../assets/sidebar/invoice.svg";
import beneficiaryIcon from "../assets/sidebar/beneficiary.svg";
import helpIcon from "../assets/sidebar/help.svg";
import settingIcon from "../assets/sidebar/setting.svg";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/getting-started",
      icon: <img src={startedIcon} alt="Getting Started" />,
      label: "Getting Started",
    },
    {
      key: "/overview",
      icon: <img src={overviewIcon} alt="Overview" />,
      label: "Overview",
    },
    {
      key: "/accounts",
      icon: <img src={startedIcon} alt="Accounts" />,
      label: "Accounts",
    },
    {
      key: "/invoice",
      icon: <img src={invoiceIcon} alt="Invoice" />,
      label: "Invoice",
    },
    {
      key: "/beneficiary",
      icon: <img src={beneficiaryIcon} alt="Beneficiary Management" />,
      label: "Beneficiary Management",
    },
    {
      key: "/help-center",
      icon: <img src={helpIcon} alt="Help Center" />,
      label: "Help Center",
    },
    {
      key: "/settings",
      icon: <img src={settingIcon} alt="Settings" />,
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
