const PaymentInfo = () => {
  return (
    <>
      <div className="flex-col border border-[#E3E6EF] p-5 rounded-3xl">
        <p className="text-[#697598] font-semibold uppercase mb-3">
          payment information
        </p>
        <div className="grid grid-cols-4 gap-5 ">
          <div className="flex flex-col gap-2">
            <p className="text-[#666F77]  uppercase text-xs">Account name</p>
            <p className="text-[#1F1F23] font-bold text-xs">1023902390</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#666F77]  uppercase text-xs">account number</p>
            <p className="text-[#1F1F23] font-bold text-xs">March 30th, 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#666F77]  uppercase text-xs">Ach routing no</p>
            <p className="text-[#1F1F23] font-bold text-xs">May 19th, 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#666F77]  uppercase text-xs">Bank Name</p>
            <p className="text-[#1F1F23] font-bold text-xs">USD ($)</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-[#666F77]  uppercase text-xs">bank address</p>
            <p className="text-[#1F1F23] font-bold text-xs">1023902390</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-[#666F77]  uppercase text-xs">account number</p>
            <p className="text-[#1F1F23] font-bold text-xs">March 30th, 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
