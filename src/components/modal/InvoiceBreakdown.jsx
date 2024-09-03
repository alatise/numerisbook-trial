import React from "react";
import { List } from "antd";

const invoiceData = [
  {
    service: "Email Marketing",
    description: [
      "Sed ut perspiciatis unde omnis iste natus",
      "error sit voluptatem accusantium ",
    ],
    qty: 10,
    amount: 1500,
    total: 15000.0,
  },
  {
    service: "Video looping effect",
    description: [""],
    qty: 6,
    amount: 1110500,
    total: 6663000.0,
  },
  {
    service: "Graphic design for emails",
    description: ["Tsit voluptatem accusantium "],
    qty: 7,
    amount: 2750,
    total: 19250,
  },
  {
    service: "Video looping effect",
    description: [" "],
    qty: 6,
    amount: 1110500,
    total: 6663000.0,
  },
];

const InvoiceBreakdown = () => {
  const subtotal = invoiceData.reduce((sum, item) => sum + item.total, 0);
  const discountRate = 0.025; // 2.5%
  const discount = subtotal * discountRate;
  const totalAmountDue = subtotal - discount;

  return (
    <div className="w-full">
      <List
        split={false}
        dataSource={invoiceData}
        renderItem={(invoice, index) => (
          <List.Item key={index}>
            <div className="w-full grid grid-cols-4">
              <div className="text-[#373B47] text-sm font-semibold">
                <p className="font-semibold text-[#1F1F23]">
                  {invoice.service}
                </p>
                <p className="text-xs text-nowrap text-[#666F77]">
                  {invoice.description.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < invoice.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div>
                <p className="text-[#666F77] text-right font-semibold">
                  {invoice.qty}
                </p>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#373B47]">
                  ${invoice.amount.toLocaleString("en-US", {})}
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#373B47]">
                  $
                  {invoice.total.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </List.Item>
        )}
      />
      <div className="w-full grid grid-cols-4  pt-4 ">
        <div className="col-span-3 text-center  text-[#666F77] text-lg">
          SUBTOTAL
        </div>
        <div className="text-right font-bold text-[#373B47]">
          $
          {subtotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className="w-full grid grid-cols-4 mt-2">
        <div className="col-span-3 text-center text-[#666F77]">
          DISCOUNT (2.5%)
        </div>
        <div className="text-right font-bold text-[#373B47]">
          $
          {discount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className="w-full grid grid-cols-4 mt-4 pt-4">
        <div className="col-span-3 text-center  text-lg font-bold text-[#1F1F23]">
          TOTAL AMOUNT DUE
        </div>
        <div className="text-right text-lg font-bold text-[#1F1F23]">
          $
          {totalAmountDue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
};

export default InvoiceBreakdown;
