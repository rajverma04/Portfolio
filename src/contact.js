import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // email pattern helper
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // validate given value and set error state
  const validateEmailValue = (value) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  // onChange handler for the email input (live validation)
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmailValue(value); // live validation while typing
  };

  // also validate on blur (optional but good UX)
  const handleEmailBlur = () => {
    validateEmailValue(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // final validation before sending
    if (!validateEmailValue(email)) {
      setStatusMessage("❌ Please fix the form errors before sending.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");
    console.log("ENV CHECK:", {
  SERVICE: process.env.REACT_APP_SERVICE_ID,
  TEMPLATE: process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC:  process.env.REACT_APP_PUBLIC_KEY
});
    emailjs
      .sendForm(
        "service_6ciiktb",
        "template_4tepwer",
        formRef.current,
        "nqOiy9DqaJ3SrWb90"
      )
      .then(
        (result) => {
          setStatusMessage("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
          setEmail(""); // reset controlled state
          setEmailError("");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("❌ Failed to send. Check EmailJS logs.");
          setIsSending(false);
        }
      );
  };

  const isFormValid = () => {
    // add other checks if you want (e.g. required subject/message)
    return email && !emailError;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-3xl w-full px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#a855f7]">
          📬 Contact Me
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative z-50 pointer-events-auto bg-[#0f172a] p-8 rounded-2xl space-y-6"
          style={{ touchAction: "manipulation" }}
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Name</label>
            <input
              name="from_name"
              required
              className="w-full px-4 py-3 rounded bg-[#1e293b] text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Email</label>
            <input
              name="from_email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
              className={`w-full px-4 py-3 rounded bg-[#1e293b] text-white ${
                emailError ? "outline outline-1 outline-red-500" : ""
              }`}
            />
            {emailError && (
              <p id="email-error" className="mt-2 text-xs text-red-400">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Subject</label>
            <input
              name="subject"
              required
              className="w-full px-4 py-3 rounded bg-[#1e293b] text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded bg-[#1e293b] text-white"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSending || !isFormValid()}
              className={`px-8 py-3 rounded ${
                isSending || !isFormValid() ? "bg-gray-600" : "bg-[#a855f7]"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p className="mt-3 text-sm">{statusMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
