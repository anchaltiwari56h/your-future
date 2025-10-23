import "./privacy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>
          At <strong>YourFuture</strong>, your privacy is very important to us. We
          respect your personal information and are committed to protecting it.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect information such as your name, email, and activity on the
          platform to improve your experience.
        </p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide personalized career guidance.</li>
          <li>To improve and optimize our services.</li>
          <li>To communicate important updates or announcements.</li>
        </ul>
        <h2>Third-Party Services</h2>
        <p>
          We do not share your personal information with third parties without your
          consent, except as required by law.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:support@yourfuture.com">support@yourfuture.com</a>.
        </p>
      </div>
    </section>
  );
}
