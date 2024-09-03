/* eslint-disable react/prop-types */
import { Modal, Dropdown } from "antd";
import close from "../../assets/content/close.svg";
import CustomButton from "../CustomButton";
import ReminderSection from "./ReminderSection";
import SenderDetail from "./SenderDetail";
import ModalInvoiceActivity from "./ModalInvoiceActivity";

const InvoiceDetailModal = ({ isVisible, onClose }) => {
  const items = [
    {
      key: "1",
      label: "Duplicate invoice",
    },
    {
      key: "2",
      label: "get sharable link",
    },
  ];

  const MoreButtonWithDropdown = () => (
    <Dropdown
      menu={{
        items,
        className: "custom-dropdown-menu",
      }}
      placement="bottomRight"
      trigger={["hover"]}
      overlayStyle={{ zIndex: 1060 }}
      dropdownRender={(menu) => (
        <div className="custom-dropdown-container">{menu}</div>
      )}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {" "}
        <CustomButton variant="secondary" text="More" className="px-[20px]" />
      </div>
    </Dropdown>
  );

  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      width="94%"
      closeIcon={null}
      className="invoice-detail-modal"
      modalRender={(modal) => (
        <div className="relative">
          <div className="absolute -top-14 right-2 z-10">
            <img
              src={close}
              className="text-gray-700 text-xl bg-white rounded-full p-0.5 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="rounded-3xl overflow-hidden">{modal}</div>
        </div>
      )}
    >
      <main className="py-2 px-4 flex flex-col gap-6">
        <section className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#1F1F23] text-3xl font-bold">
              Invoice - 1023494 - 2304{" "}
            </p>
            <p className="text-[#697598]">
              View the details and activity of this invoice
            </p>
          </div>
          <div className="flex gap-4">
            <CustomButton variant="seconadry" text="Download as pdf" />
            <CustomButton text="Send invoice" />
            <MoreButtonWithDropdown />
          </div>
        </section>
        <CustomButton
          variant="secondary"
          text="PARTIAL PAYMENT"
          className="!w-[12%] h-7 text-[10px] !text-[#003EFF] border !border-[#003EFF33]"
        />
        <ReminderSection />
        <section className="flex gap-10">
          <main className="flex w-3/5">
            <SenderDetail />
          </main>
          <main className="flex w-2/5 ">
            <ModalInvoiceActivity />
          </main>
        </section>
      </main>
    </Modal>
  );
};

export default InvoiceDetailModal;
