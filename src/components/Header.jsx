/* eslint-disable react/prop-types */
import { Layout } from "antd";
import bell from "../assets/content/notification-bing.svg";
import iconDown from "../assets/content/arrow-square-up.svg";
const { Header } = Layout;

const HeaderComp = ({ title }) => {
  return (
    <div className="bg-[#F5F6FA]">
      <Header className="flex justify-between px-10 items-center my-4  bg-[#F5F6FA]">
        <h1 className="text-3xl font-bold text-[#373B47] uppercase">{title}</h1>
        <div className="flex gap-4">
          <div className="bg-white flex justify-center items-center p-8 rounded-full relative">
            <img
              src={bell}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto "
            />
          </div>
          <div className="flex bg-white p-3 rounded-full gap-1  items-center">
            <div className="bg-[#003EFF] rounded-full h-8 w-8 flex items-center justify-center p-5">
              <p className="text-white uppercase font-bold">KO</p>
            </div>
            <img src={iconDown} alt="" />
          </div>
        </div>
      </Header>

      <hr className="bg-[#A1B8FF33] mx-10  " />
    </div>
  );
};

export default HeaderComp;
