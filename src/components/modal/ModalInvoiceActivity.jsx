import avatar from "../../assets/content/avatar.svg";

const featureData = [
  {
    icon: avatar,
    title: "You",
    date: "Today, 12:20 PM",
    description: ["Created invoice 00239434/Olaniyi Ojo Adewale"],
  },
  {
    icon: avatar,
    title: "You",
    date: "Today, 12:20 PM",
    description: [
      "Sent invoice 00239434/Olaniyi Ojo Adewale to",
      "Olaniyi Ojo Adewale",
    ],
  },
  {
    icon: avatar,
    title: "Payment Confirmed",
    date: "Today, 12:20 PM",
    description: ["You manually confirmed a partial payment of", "$203,000.00"],
  },
  {
    icon: avatar,
    title: "Payment Confirmed",
    date: "Today, 12:20 PM",
    description: ["You manually confirmed a full payment of", "$6,000.00"],
  },
  {
    icon: avatar,
    title: "You",
    date: "Today, 12:20 PM",
    description: [
      "Sent invoice 00239434/Olaniyi Ojo Adewale to",
      "Olaniyi Ojo Adewale",
    ],
  },
];

const ModalInvoiceActivity = () => {
  return (
    <>
      <div className="flex flex-col  relative w-[90%]">
        <p className="text-[#1F1F23] text-[20px] mb-5 font-bold ">
          Invoice Activity
        </p>

        {featureData.map((feature, index) => (
          <div key={index} className="flex items-start relative">
            <div className="relative z-10 flex-shrink-0">
              <img src={feature.icon} alt="" />
            </div>
            {index < featureData.length - 1 && (
              <div
                className="absolute left-6 top-8 bottom-0 w-[1px] bg-[#E3E6EF]"
                style={{ height: "calc(100% - 1px)" }}
              />
            )}
            <div className="ml-4 flex-1 pb-6">
              <p className="text-lg font-semibold">{feature.title}</p>
              <p className="text-xs text-[#697598]">{feature.date}</p>
              <div className="bg-[#F6F8FA] rounded-2xl p-5 mt-1">
                {feature.description.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="text-xs font-bold text-[#1F1F23]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ModalInvoiceActivity;
