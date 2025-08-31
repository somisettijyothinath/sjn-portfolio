import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();  // 👈 this creates the reference

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_utewbg8",    // your Service ID
        "template_3bcduzk",   // your Template ID
        form.current,         // 👈 use the ref here
        { publicKey: "Pl4Z_2tSaKJQxiQWF" }
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS error:", error);
          alert("❌ Failed to send message, check console for details!");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="mb-3 row g-3">
                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control py-2 rounded-0" placeholder="Name" required=""/>
                  </div>
                  <div class="col-md-6">
                    <input type="email" name="email" class="form-control py-2 rounded-0" placeholder="Email" required=""/>
                  </div>
                  <div class="mb-3">
                    <textarea name="message" class="form-control rounded-0" placeholder="Message" rows="8"></textarea>
                  </div>
                  <div class="text-start">
                    <button class="btn-send"><span> Send </span> </button>
                  </div>
                </div>
    </form>
  );
}

export default ContactForm;
