import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SentModal from "../Modals/SentModal.jsx";
import { MdLocationOn, MdEmail, MdLocalPhone, MdPhone } from "react-icons/md";

const ContactUs = () => {
  const form = useRef(null);

  //open modal
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //Validation message
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    //getting form data
    const data = new FormData(form.current);
    const fullName = data.get("user_name");
    const email = data.get("user_email");
    const phoneNum = data.get("user_number");
    const message = data.get("user_message");

    //validation

    if (!fullName) {
      setMessage("Please enter your full name");
      return;
    }

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    if (!message) {
      setMessage("Please enter your message");
      return;
    }

    if (!validEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    //email js config
    emailjs
      .sendForm("service_cq11c5a", "template_ggnn21d", form.current, {
        publicKey: "fWSKKfR5PgZb5gI6Q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          openModal();
          form.current.reset();
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const validEmail = (email) => {
    const response = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return response.test(email);
  };

  return (
    <>
      <div className="mx-4 md:flex md:mx-16">
        {/* Left-section */}
        <div className="w-full mb-8 md:w-[50%]">
          {/* maps */}
          <iframe
            className="border-0 w-full h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.201236317405!2d121.0277093!3d14.644515300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7754ff4629d%3A0x72e5526c971ae8ce!2sIntelliseven%20Technology%20Solutions%20Inc.!5e0!3m2!1sen!2sph!4v1712496597105!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* How to find us */}
          <div className="bg-primary text-white py-5 px-7">
            <h1 className="text-2xl md:w-[80%] mb-4 font-medium">
              Experience the Ease and Comfort of Owning a Home
            </h1>
            <div className="text-sm">
              <p className="mb-2">You can also reach us through:</p>
              <h3 className="flex items-center w-[90%] mb-1 hover:text-accent cursor-pointer">
                <span className="mr-2">
                  <MdEmail />
                </span>
                hello@intelliseven.com.ph
              </h3>
              <h3 className="flex items-center w-[90%] mb-1">
                <span className="mr-2">
                  <MdLocalPhone />
                </span>
                +63918-909-0331
              </h3>
              <h3 className="flex items-center">
                <span className="mr-2">
                  <MdLocalPhone />
                </span>
                +63917-309-2317
              </h3>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="mx-4 md:w-[50%] md:ml-9">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl whitespace-nowrap mr-2 font-medium">
              Get in Touch Today
            </h1>
            <div className="bg-primary w-full h-0.5"></div>
          </div>
          <p className="text-sm mt-1 md:w-[70%]">
            Feel free to reach out to us and connect with one of our welcoming
            representatives.
          </p>
          <div className="text-red-500 my-3 text-sm">{message}</div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col mt-4 font-helvetica text-sm text-gray"
          >
            <label>Full name</label>
            <input
              className="bg-input text-black p-2 focus:outline-none"
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
            <label className="mt-3">Email Address</label>
            <input
              className="bg-input text-black p-2 focus:outline-none"
              type="text"
              name="user_email"
              placeholder="Enter your email address"
            />

            <label className="mt-3">Phone Number &#40;optional&#41;</label>
            <input
              className="bg-input text-black p-2 focus:outline-none"
              type="text"
              name="user_number"
              placeholder="Enter your phone number"
              pattern="[0-9]{11}"
            />
            <label className="mt-3">Message</label>
            <textarea
              className="bg-input text-black p-2 focus:outline-none"
              type="text"
              name="user_message"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
            <input
              className="cursor-pointer mt-4 font-playFair border-2 p-3 border-white text-white bg-accent lg:w-[40%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200"
              type="submit"
              value="Send Message"
            />
          </form>
          <SentModal onClose={closeModal} open={modalOpen} />
        </div>
      </div>
    </>
  );
};
export default ContactUs;
