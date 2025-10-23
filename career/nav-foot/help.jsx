import "./help.css";

export default function Help() {
  return (
    <section className="help-section">
      <div className="help-container">
        <h1>Need Help?</h1>
        <p>
          We are here to guide you! Browse our FAQs or send us a message if you
          need further assistance.
        </p>

        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>Q:</strong> How do I find the right career stream?<br/>
                <strong>A:</strong> Answer the guided questions on the home page to get personalized suggestions.</li>
            <li><strong>Q:</strong> Can I change my answers later?<br/>
                <strong>A:</strong> Yes, you can revisit the questions and update your answers anytime.</li>
            <li><strong>Q:</strong> Is YourFuture free?<br/>
                <strong>A:</strong> Yes, YourFuture is completely free for students.</li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
