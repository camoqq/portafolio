import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Last from "../Components/Last";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Last heading="Contact" text="Contact me here ⬇️" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
