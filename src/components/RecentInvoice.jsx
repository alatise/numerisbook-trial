import { List, Tag } from "antd";
import { useState } from "react";
import InvoiceDetailModal from "./modal/InvoiceDetailModal";

const invoices = [
  {
    id: "1023494-2304",
    date: "2022-11-27",
    amount: 1311750.12,
    status: "PAID",
  },
  {
    id: "1023494-2304",
    date: "2022-11-27",
    amount: 1311750.12,
    status: "OVERDUE",
  },
  {
    id: "1023494-2304",
    date: "2022-12-08",
    amount: 1311750.12,
    status: "DRAFT",
  },
  {
    id: "1023494-2304",
    date: "2022-12-08",
    amount: 1311750.12,
    status: "PENDING PAYMENT",
  },
  {
    id: "1023494-2304",
    date: "2022-12-08",
    amount: 1311750.12,
    status: "PAID",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "PAID":
      return "bg-[#E6FFF0] border border-[#12904333]  text-[#129043]";
    case "OVERDUE":
      return "bg-[#FFF4F5] border border-[#FF566333] px-5 text-[#FF5663]";
    case "DRAFT":
      return "bg-[#F6F8FA] border border-[#373B4733] px-6 text-[#373B47]";
    case "PENDING PAYMENT":
      return "bg-[#FFF8EB] border border-[#D98F0033] text-[#D98F00]";
    default:
      return "bg-[#E6FFF0] border border-[#12904333] text-[#129043]";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const groupInvoices = (invoices) => {
  return invoices.reduce((acc, invoice) => {
    const invoiceDate = new Date(invoice.date);
    let key;
    if (invoiceDate.toDateString() === new Date("2022-11-27").toDateString()) {
      key = "TODAY - 27TH NOVEMBER, 2022";
    } else if (
      invoiceDate.toDateString() === new Date("2022-12-08").toDateString()
    ) {
      key = "8TH DECEMBER, 2022";
    } else {
      key = formatDate(invoice.date).toUpperCase();
    }
    if (!acc[key]) acc[key] = [];
    acc[key].push(invoice);
    return acc;
  }, {});
};

const InvoiceList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const showModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const groupedInvoices = groupInvoices(invoices);

  return (
    <div className="max-w-4xl mx-auto">
      {Object.entries(groupedInvoices).map(([date, invoices]) => (
        <div key={date} className="mb-8">
          <h2 className="text-sm font-bold text-[#1F1F23]">{date}</h2>
          <List
            split={false}
            dataSource={invoices}
            renderItem={(item) => (
              <List.Item>
                <div
                  onClick={() => showModal(item)}
                  className="w-full grid grid-cols-3 pl-6 space-y-2 items-center cursor-pointer  "
                >
                  <div className="text-[#373B47] mt-3 text-sm font-semibold gap-0.5 flex flex-col">
                    <p className="font-semibold">Invoice-</p>
                    <p>{item.id}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="uppercase text-[#666F77] font-semibold">
                      Due Date
                    </p>
                    <p className="text-[#697598] font-semibold">
                      {formatDate(item.date)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center font-bold mb-2  text-[#373B47]">
                      <span>
                        $
                        {item.amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                    <Tag
                      className={`${getStatusColor(
                        item.status
                      )} px-3 py-0.5 rounded-full text-[10px] font-semibold`}
                    >
                      {item.status}
                    </Tag>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      ))}
      <InvoiceDetailModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        invoice={selectedInvoice}
      />
    </div>
  );
};

export default InvoiceList;
