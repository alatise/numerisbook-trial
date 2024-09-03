import React from "react";
import avatar from "../assets/content/avatar.svg";

const featureData = [
  {
    icon: avatar,
    title: "Invoice creation",
    date: "Yesterday, 12:05 PM",
    description: ["Created invoice 00239434/Olaniyi Ojo ", "Adewale"],
  },
  {
    icon: avatar,
    title: "Invoice creation",
    date: "Yesterday, 12:05 PM",
    description: ["Created invoice 00239434/Olaniyi Ojo ", "Adewale"],
  },
  {
    icon: avatar,
    title: "Invoice creation",
    date: "Yesterday, 12:05 PM",
    description: ["Created invoice 00239434/Olaniyi Ojo ", "Adewale"],
  },
  {
    icon: avatar,
    title: "Invoice creation",
    date: "Yesterday, 12:05 PM",
    description: ["Created invoice 00239434/Olaniyi Ojo ", "Adewale"],
  },
];

const RecentActivities = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {featureData.map((feature, index) => (
          <div
            key={index}
            data-testid="feature-item"
            className="flex gap-3 items-start mt-"
          >
            <img src={feature.icon} alt="" />
            <article className="flex flex-col gap-1">
              <p className="text-xl font-bold">{feature.title}</p>
              <p className="text-[#697598]">{feature.date}</p>
              <p className="bg-[#F6F8FA] text-xs font-bold text-[#1F1F23] rounded-2xl py-3 px-5">
                {feature.description.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < feature.description.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentActivities;
