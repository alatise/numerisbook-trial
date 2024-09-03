/* eslint-disable react/prop-types */
import { Card, Typography } from "antd";
import CustomButton from "../components/CustomButton";
import overviewIcon from "../assets/sidebar/overview.svg";
import InvoiceActions from "../components/InvoiceActions";

const cardData = [
  {
    value: 4120102.76,
    status: "total paid",
    statusTotal: (
      <div className="bg-[#B6FDD3] rounded-full flex justify-center px-4 pt-3">
        <p className="text-center">1,289</p>
      </div>
    ),
    icon: <img width={30} height={30} src={overviewIcon} alt="cardImg" />,
  },
  {
    value: 23000.13,
    status: "total overdue",
    statusTotal: (
      <div className="bg-[#FFB7BD] rounded-full flex justify-center px-4 pt-3">
        <p className="text-center">13</p>
      </div>
    ),
    icon: <img width={30} height={30} src={overviewIcon} alt="cardImg" />,
  },
  {
    value: 12200,
    status: "total draft",
    statusTotal: (
      <div className="bg-[#D9D9E0] rounded-full flex justify-center px-4 pt-3">
        <p className="text-center">08</p>
      </div>
    ),
    icon: <img width={30} height={30} src={overviewIcon} alt="cardImg" />,
  },
  {
    value: 87102,
    status: "total unpaid",
    statusTotal: (
      <div className="bg-[#F8E39B] rounded-full flex justify-center px-4 pt-3">
        <p className="text-center">06</p>
      </div>
    ),
    icon: <img width={30} height={30} src={overviewIcon} alt="cardImg" />,
  },
];

const FormattedCurrency = ({ value }) => {
  const formatCurrency = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatted = formatCurrency(value);
  const [dollars, cents] = formatted.split(".");

  return (
    <p className="text-xl text-[#1F1F23] font-bold">
      {dollars}
      <span className="text-sm text-[#697598] align-bottom">.{cents}</span>
    </p>
  );
};

const Invoice = () => {
  return (
    <>
      <main className="flex flex-col ">
        <div className="flex justify-between items-center mt-2">
          <p className="text-2xl font-bold">Invoice</p>
          <div className="flex gap-5">
            <CustomButton variant="secondary" text="see what’s new" />
            <CustomButton text="create" className="px-6" />
          </div>
        </div>
        <div className="flex w-full gap-6 mt-7">
          {cardData.map((card, index) => (
            <Card
              key={index}
              bordered={false}
              hoverable
              className="rounded-3xl shadow-lg py-0.5 px-2 w-1/4"
            >
              <div className="flex flex-col gap-1 items-start">
                <div>{card.icon}</div>
                <div className="flex items-center gap-2 mt-2">
                  <Typography className="uppercase text-gray-500 font-semibold">
                    {card.status}
                  </Typography>
                  <Typography className={`text-xs font-bold `}>
                    {card.statusTotal}
                  </Typography>
                </div>
                <FormattedCurrency value={card.value} />
              </div>
            </Card>
          ))}
        </div>
      </main>
      <main className="flex flex-col mt-7 ">
        <InvoiceActions />
      </main>
    </>
  );
};

export default Invoice;
