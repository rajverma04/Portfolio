import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent — thank you!");
          setSending(false);
          formRef.current.reset();
          setEmail("");
        },
        () => {
          setStatus("Could not send right now. Try email instead.");
          setSending(false);
        },
      );
  };
  return (
    <section id="contact" className="clay-section">
      <div className="clay-shell">
        <div className="contact-grid">
          <div className="contact-aside clay-panel">
            <div>
              <span className="clay-kicker">08 / say hello</span>
              <h2 className="clay-title">
                Have a<br />
                <span className="text-[#ff7657]">good idea?</span>
              </h2>
              <p className="clay-copy mt-6">
                Tell me what you’re building. I’m always up for thoughtful
                products, tricky problems, and a good conversation.
              </p>
            </div>
            <div>
              <div className="contact-note clay-panel-inset">
                Usually replies within 24–48 hours.
                <br />
                rajkumargrd56@gmail.com
              </div>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={submit}
            className="contact-form clay-panel"
          >
            <div className="form-group">
              <label>Your name</label>
              <input
                className="clay-input"
                name="from_name"
                required
                placeholder="Jane Doe"
              />
            </div>
            <div className="form-group">
              <label>Your email</label>
              <input
                className="clay-input"
                name="from_email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                className="clay-input"
                name="subject"
                required
                placeholder="Let’s make something"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="clay-input"
                name="message"
                required
                rows="6"
                placeholder="A little context goes a long way..."
              />
            </div>
            <button className="clay-button w-full" disabled={sending}>
              {sending ? (
                "Sending..."
              ) : (
                <>
                  Send message <FaPaperPlane />
                </>
              )}
            </button>
            {status && (
              <p className="text-center text-sm text-[#db5c40]">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
