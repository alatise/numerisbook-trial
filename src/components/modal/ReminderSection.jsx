import check from "../../assets/content/green-check.svg";
const ReminderItem = ({ text, isActive, className }) => (
  <p
    className={`text-xs text-bold flex items-center gap-2 py-2 px-4 rounded-full ${
      isActive ? "bg-[#E6FFF0]" : "bg-[#FFFFFF] border border-[#E3E6EF]"
    } ${className || ""}`}
  >
    {text}
    {isActive && (
      <span>
        <img src={check} alt="" />
      </span>
    )}
  </p>
);

const ReminderSection = () => {
  const reminders = [
    { text: "14 days before due date", isActive: true },
    { text: "7 days before due date", isActive: true },
    { text: "3 days before due date", isActive: false },
    { text: "24 hours before due date", isActive: false },
    { text: "on the due date", isActive: false },
  ];

  return (
    <section className="flex w-[87%] items-center border border-[#E3E6EF] gap-4 p-6 rounded-3xl">
      <p className="text-[#666F77] text-bold uppercase text-sm">Reminders</p>
      {reminders.map((reminder, index) => (
        <ReminderItem key={index} {...reminder} />
      ))}
    </section>
  );
};

export default ReminderSection;
