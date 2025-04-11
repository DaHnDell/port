import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError(null);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError("메일 전송에 실패했습니다. 다시 시도해주세요.");
          setIsSent(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      {isSent && <p className="success">메시지가 성공적으로 전송되었습니다!</p>}
      {error && <p className="error">{error}</p>}
    </section>
  );
};

export default ContactSection;
