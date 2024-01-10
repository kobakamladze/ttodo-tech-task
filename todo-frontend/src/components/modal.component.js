import React from "react";

const ModalWindow = ({ children, setModalContent }) => {
  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative rounded-lg p-[2rem_3rem_0rem] bg-white m-auto min-h-[50%] w-[60%]">
        {children}
        <button
          className="absolute border-l-red-700 top-4 right-4 p-3 pt-4 rounded-md border-[2px] leading-4 font-bold text-[2rem] text-red-600 bg-transparent hover:text-white hover:border-transparent hover:bg-red-700 border-red-700 "
          onClick={() => setModalContent(null)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
