import logoSender from "../../assets/content/logo-sender.svg";
import InvoiceBreakdown from "./InvoiceBreakdown";
import PaymentInfo from "./PaymentInfo";

const SenderDetail = () => {
  return (
    <>
      <main className="flex w-full flex-col gap-7 border border-[#E3E6EF] rounded-3xl p-8">
        <section className="flex flex-col gap-7 w-full  bg-[#FCDDEC] rounded-3xl p-7 ">
          <div className="flex justify-between gap-5">
            <div className="flex-col">
              <p className="text-[#697598] uppercase text-sm font-semibold mb-3">
                Sender
              </p>
              <div className="flex items-start gap-3">
                <img src={logoSender} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="text-[#1F1F23] text-[17px] font-bold">
                    Fabulous Enterprise
                  </p>
                  <p className="text-[#697598] text-xs">+386 989 271 3115</p>
                  <p className="text-[#697598] text-xs">
                    1331 Hart Ridge Road 48436 Gaines, MI{" "}
                  </p>
                  <p className="text-[#697598] text-xs">
                    info@fabulousenterise.co
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <p className="text-[#697598] uppercase text-sm font-semibold mb-3">
                Customer
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-[#1F1F23] text-[17px] font-bold">
                  Olaniyi Ojo Adewale
                </p>
                <p className="text-[#697598] text-xs">+386 989 271 3115</p>
                <p className="text-[#697598] text-xs">
                  info@fabulousenterise.co
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col ">
            <p className="text-[#697598] font-semibold uppercase mb-3">
              Invoice details
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#666F77]  uppercase text-xs">invoice no</p>
                <p className="text-[#1F1F23]  text-xs">1023902390</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#666F77] uppercase text-xs">Issue date</p>
                <p className="text-[#1F1F23]  text-xs">March 30th, 2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#666F77] uppercase text-xs">Due date</p>
                <p className="text-[#1F1F23]  text-xs">May 19th, 2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#666F77] uppercase text-xs">
                  Billing currency
                </p>
                <p className="text-[#1F1F23]  text-xs">USD ($)</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center gap-10 w-full">
          <p className="font-bold text-xl whitespace-nowrap">Items</p>
          <div className="h-0.5 bg-[#E3E6EF] flex-grow"></div>
        </section>
        <section>
          <InvoiceBreakdown />
        </section>
        <section className="">
          <PaymentInfo />
        </section>
        <section className="flex flex-col bg-[#F6F8FA] rounded-3xl px-6 pt-6 pb-8 ">
          <p className="uppercase text-[#B7BDCF]">Note</p>
          <p className="text-[#666F77] text-base">
            Thank you for your patronage
          </p>
        </section>
      </main>
    </>
  );
};

export default SenderDetail;
