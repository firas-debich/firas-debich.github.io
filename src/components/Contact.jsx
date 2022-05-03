import React, { useState } from "react";
import axios from "axios";
import ToastSucces from "./Toast/ToastSucces";
import ToastError from "./Toast/ToastError";
import * as yup from 'yup';
const Contact = () => {
  const [dataForm, setData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setError] = useState(false);
  const [loading,setLoading]=useState(false)
  const [msg,setMsg]=useState("")
  let schema = yup.object().shape({
    name:yup.string().required(),
    email: yup.string().email().required(),
    message:yup.string().required()
  })
  const handleChange = (e) =>
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  const handleSubmit = async () => {
     
    const valid = await schema.isValid({
      name: dataForm.name,
      email: dataForm.email,
      message: dataForm.message
    })  
    if(!valid){
       setMsg("invalid inputs!")
       setError(true);
      setTimeout(()=>{
        setError(false)
      },5000)
       return
  
      }
    try {
     setLoading(true)
     const headers = {
      'Content-Type': "application/json",
  };

      const { data } = await axios.post(process.env.REACT_APP_API, {
        name: dataForm.name,
        email: dataForm.email,
        message: dataForm.message,
      },headers);
      if (data) {
        setData({ name: "", email: "", message: "" });
        setSubmitted(true);
        setError(false);
        setLoading(false)
      }
      setLoading(false)
      return setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 5000);
    } catch (error) {
      setData({ name: "", email: "", message: "" });
      setSubmitted(false);
      setLoading(false)
      setError(true);
      console.log(error);
      setMsg("An error occurred please try again")
      return setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 5000);
    }
  };
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <div
          className="flex flex-col max-w-[600px] w-full"
          data-aos="zoom-in-up"
        >
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
            value={dataForm.name}
            onChange={handleChange}
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded"
            type="email"
            placeholder="Email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded"
            name="message"
            rows="10"
            onChange={handleChange}
            placeholder="Message"
            value={dataForm.message}
          ></textarea>
          {isSubmitted && <ToastSucces />}
          {isError && <ToastError msg={msg} />}
          <button
            onClick={handleSubmit}
            className="text-white rounded border-2 hover:bg-[#ff914d] hover:border-[#ff914d] px-4 py-3 my-8    flex items-center mx-auto"
          >
            {loading ?(<svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"/> ) : null} 
            {loading?"Loading...":"Let's Collaborate"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
