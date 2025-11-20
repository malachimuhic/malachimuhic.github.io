import profile from "/assets/images/me.png"; // <-- update name if needed
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Left side */}
        <div className="hero-copy">
          <h1 className="hero-title">Malachi Muhic</h1>
          <p className="hero-role">Technical Portfolio</p>

          {/* Social links */}
          <div className="hero-social">
            <a
              href="https://github.com/malachimuhic"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Github size={20} strokeWidth={1.75} />
              GitHub
            </a>

            <span className="hero-social-separator">•</span>

            <a
              href="https://medium.com/@YOURUSERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <BookOpen size={20} strokeWidth={1.75} />
              Medium
            </a>

            <span className="hero-social-separator">•</span>

            <a
              href="https://www.linkedin.com/in/malachi-muhic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={20} strokeWidth={1.75} />
              LinkedIn
            </a>

            <span className="hero-social-separator">•</span>

            <a
              href="mailto:mmuhic3@gatech.edu"
              className="hero-social-link"
            >
              <Mail size={20} strokeWidth={1.75} />
              Email
            </a>
          </div>

          <div className="hero-accent" aria-hidden="true" />
        </div>

        {/* Right side */}
        <div className="hero-photo-wrap">
          <img
            src={profile}
            alt="Portrait of Malachi Muhic"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;