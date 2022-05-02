import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({});
  const handleChange = (e) =>
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  const handleSubmit = async () => {
    try {
      setData({});
    } catch (error) {
      setData({});
    }
  };
  return (
    <div
    
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full" data-aos="zoom-in-up">
        <div className="pb-8">
          <p className="text-4xl font-bold inline rounded border-b-4 border-[#ff914d] text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] rounded p-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="text-white rounded border-2 hover:bg-[#ff914d] hover:border-[#ff914d] px-4 py-3 my-8    flex items-center mx-auto"
        >
          Let's Collaborate
        </button>
      </div>
    </div>
  );
};

export default Contact;
