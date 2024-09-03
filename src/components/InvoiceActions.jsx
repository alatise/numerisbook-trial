import money from "../assets/content/money.svg";
import setting from "../assets/content/setting.svg";
import customer from "../assets/content/profile-2user.svg";
import { Card, Typography } from "antd";
import CustomButton from "./CustomButton";
import InvoiceList from "./RecentInvoice";
import RecentActivities from "./RecentActivities";

const cardData = [
  {
    title: "Create New Invoice",
    subtitle: "Create new invoices easily ",
    icon: <img src={money} alt="cardImg" />,
  },
  {
    title: "Change Invoice settings",
    subtitle: "Customise your invoices",
    icon: <img src={setting} alt="cardImg" />,
  },
  {
    title: "Manage Customer list",
    subtitle: "Add and remove customers",
    icon: <img src={customer} alt="cardImg" />,
  },
];

const InvoiceActions = () => {
  return (
    <>
      <section className="flex items-center gap-10 w-full">
        <p className="font-bold text-xl whitespace-nowrap">Invoice Actions</p>
        <div className="h-px bg-white flex-grow"></div>
      </section>
      <section className="flex w-full gap-8 mt-7">
        {cardData.map((card, index) => (
          <Card
            key={index}
            bordered={false}
            hoverable
            className={`rounded-3xl shadow-lg py-0.5 px-7 w-1/3 ${
              index === 0 ? "bg-[#003EFF]" : ""
            }`}
          >
            <div className="flex flex-col gap-1 items-start">
              <div>{card.icon}</div>
              <div className="flex flex-col gap-2 mt-2">
                <Typography
                  className={`text-lg  font-bold ${
                    index === 0 ? "text-white" : "text-[#373B47]"
                  }`}
                >
                  {card.title}
                </Typography>
                <Typography
                  className={`text-xs font-bold ${
                    index === 0 ? "text-[#F6F8FA]" : "text-[#697598]"
                  }`}
                >
                  {card.subtitle}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </section>
      <section className="flex gap-8 mt-6 w-full">
        <main className=" w-[56%] bg-white rounded-3xl p-6">
          <div className="flex justify-between  items-center w-full mb-4">
            <p className="text-[#1F1F23]  font-bold text-lg text-nowrap">
              Recent Invoices
            </p>
            <CustomButton
              variant="secondary"
              text={"View All invoices"}
              className="!w-1/3 !text-[#003EFF] !px- text-xs"
            />
          </div>
          <InvoiceList />
        </main>
        <main className=" w-[44%] bg-white rounded-3xl p-6">
          <div className="flex justify-between items-center w-full mb-4">
            <p className="text-[#1F1F23] font-bold text-lg text-nowrap">
              Recent Activities
            </p>
            <CustomButton
              variant="secondary"
              text={"View All"}
              className="!w-1/3 !text-[#003EFF] text-xs"
            />
          </div>
          <RecentActivities />
        </main>
      </section>
    </>
  );
};

export default InvoiceActions;
