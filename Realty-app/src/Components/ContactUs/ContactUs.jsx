import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn, MdEmail, MdLocalPhone, MdPhone } from "react-icons/md";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cq11c5a", "template_ggnn21d", form.current, {
        publicKey: "fWSKKfR5PgZb5gI6Q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="flex mx-16">
        {/* Left-section */}
        <div className="w-[50%]">
          {/* maps */}
          <iframe
            className="border-0 w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.201236317405!2d121.0277093!3d14.644515300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7754ff4629d%3A0x72e5526c971ae8ce!2sIntelliseven%20Technology%20Solutions%20Inc.!5e0!3m2!1sen!2sph!4v1712496597105!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* How to find us */}
          <div className="bg-primary text-white py-4 px-7">
            <h1 className="text-2xl w-[80%] mb-4">
              Experience the Ease and Comfort of Owning a Home
            </h1>
            <div className="text-sm">
              <p className="mb-2">You can also reach us through:</p>
              {/* <h3 className="flex items-center w-[90%] mb-1 hover:text-accent cursor-pointer">
                <span className="mr-2">
                  <MdLocationOn />
                </span>
                Unit 309, 3rd Floor, West City Plaza, 66 West Ave, Quezon City,
                1104 Metro Manila
              </h3> */}
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
                </span>{" "}
                +63917-309-2317
              </h3>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="w-[50%] ml-9">
          <div className="flex items-center">
            <h1 className="text-3xl whitespace-nowrap mr-2">
              Get in Touch Today
            </h1>
            <div className="bg-primary w-full h-0.5"></div>
          </div>
          <p className="text-sm mt-1 w-[70%]">
            Feel free to reach out to us and connect with one of our welcoming
            representatives.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col mt-6 font-helvetica text-sm text-gray"
          >
            <label>Full name</label>
            <input
              className="bg-input text-gray p-2 focus:outline-none"
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
            <label className="mt-4">Email Address</label>
            <input
              className="bg-input text-gray p-2 focus:outline-none"
              type="text"
              name="user_email"
              placeholder="Enter your email address"
            />

            <label className="mt-4">Phone Number &#40;optional&#41;</label>
            <input
              className="bg-input text-gray p-2 focus:outline-none"
              type="text"
              name="user_number"
              placeholder="Enter your phone number"
            />
            <label className="mt-4">Message</label>
            <textarea
              className="bg-input text-gray p-2 focus:outline-none"
              type="text"
              name="user_message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
            <input
              className="cursor-pointer mt-4 font-playFair border-2 border-white text-white p-2 bg-accent w-[30%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
