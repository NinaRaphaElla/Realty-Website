import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <div className="flex">
        {/* Left-section */}
        <div>
          {/* maps */}
          <iframe
            className="border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.201236317405!2d121.0277093!3d14.644515300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7754ff4629d%3A0x72e5526c971ae8ce!2sIntelliseven%20Technology%20Solutions%20Inc.!5e0!3m2!1sen!2sph!4v1712496597105!5m2!1sen!2sph"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* How to find us */}
          <div className="bg-secondary-300 text-white">
            <h1>Experience the Ease and Comfort of Owning a Home</h1>
            <p>
              Send us a message and we’ll get back to you. You can also connect
              with us through:
            </p>
          </div>
        </div>

        {/* Forms */}
        <div className="w-[50%]">
          <h1>Get in Touch Today</h1>
          <p>
            Feel free to reach out to us and connect with one of our welcoming
            representatives.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <label>Full name</label>
            <input
              className="border"
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
            <label>Email Address</label>
            <input
              className="border"
              type="text"
              name="user_email"
              placeholder="Enter your email address"
            />

            <label>Phone Number &#40;optional&#41;</label>
            <input
              className="border"
              type="text"
              name="user_number"
              placeholder="Enter your phone number"
            />
            <label>Message</label>
            <textarea
              className="border"
              type="text"
              name="user_message"
              placeholder="Enter your message"
            ></textarea>
            <input className="cursor-pointer" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
