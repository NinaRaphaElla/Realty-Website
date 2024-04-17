import React from "react";
import sentGif from "./sent-message.gif";
import LoadButton from "../Buttons/LoadButton";

const Modal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      {/* container */}
      <div
        className="flex items-center justify-center fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50"
        onClick={onClose}
      >
        {/* content */}
        <div>
          <div className=" bg-white flex flex-col justify-center items-center p-8 rounded-sm shadow-xxl">
            <img
              src={sentGif}
              alt="loading..."
              width="120"
              height="70"
              class="ml-4"
            />
            <div className="text-center">
              <p className="text-2xl font-bold">Thank you!</p>
              <p className="text-base font-normal text-gray w-[400px]">
                Your message has been sent. Someone from our support team will
                reply to your inquiries within 24 hours.
              </p>
            </div>

            <div className="mt-5">
              <LoadButton btnName={"Back to home"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
