import "./Form.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ru3zgop",
        "template_1cigicj",
        form.current,
        "EpUCsf0nAyZa1wcA0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="cont">
      <form onSubmit={sendEmail} ref={form}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea rows="6" name="messaje" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Form;
