import "./about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Your FUTURE</h1>
        <p className="about-subtitle">
          Guiding students toward the right future — one choice at a time.
        </p>

        <div className="about-content">
          <p>
            Welcome to <span className="highlight">YourFuture</span> — a
            platform designed to help students find clarity in their career
            decisions. We know how confusing it can be to choose a stream or
            profession after school, and we’re here to make that process
            easier, smarter, and more personal.
          </p>

          <p>
            Our mission is simple — to empower every student with the right
            tools, guidance, and insights so they can make confident career
            choices. By analyzing interests, goals, and academic strengths,
            <span className="highlight"> YourFuture</span> helps you explore
            the best options tailored for your future.
          </p>

          <p>
            Whether you dream of becoming a doctor, engineer, artist, or
            entrepreneur, we’ll guide you through the journey of self-discovery
            and opportunity exploration. Let’s build your future, together.
          </p>
        </div>

        <div className="about-footer">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted career guidance platform that empowers
            students to discover their potential and shape their success path.
          </p>
        </div>
        <div className="testimonial-section">
  <h2 className="stud">What Students Say</h2>
  <div className="testimonials">
    <blockquote>
      “YourFuture helped me discover my interest in Computer Science. The guidance was so clear!”
      <footer>— Priya, Class 10</footer>
    </blockquote>
    <blockquote>
      “I finally understood which stream suits me best. Highly recommend YourFuture!”
      <footer>— Aarav, Class 12</footer>
    </blockquote>
  </div>
</div>

      </div>
    </section>
  );
}

