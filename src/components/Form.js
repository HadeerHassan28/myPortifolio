import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceID = "service_viw3epl";
  const templateID = "template_nlximms";
  emailjs.init("RQviWMUW3zwvw1Z8c");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceID, templateID, formData)
      .then((result) => {
        console.log(result.text);
        toast.success("thank u for contact us", { duration: 10000 });
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("error, please try again later", { duration: 10000 });
      });
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">
          {/* {success ? "Message Sent" : "Send Message"} */}
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
