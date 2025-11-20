import { Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <h2 className="contact-title">Get in Touch</h2>

        <a href="mailto:mmuhic3@gatech.edu" className="contact-email">
          mmuhic3@gatech.edu
        </a>

        <div className="contact-icons">
          <a
            href="https://github.com/malachimuhic"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
          >
            <Github size={28} strokeWidth={1.75} />
          </a>

          <a
            href="https://www.linkedin.com/in/malachi-muhic/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
          >
            <Linkedin size={28} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;