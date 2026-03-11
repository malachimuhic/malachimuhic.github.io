import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[1] bg-white py-24 px-6"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[2rem] font-bold mb-5">Get in Touch</h2>

        <a
          href="mailto:mmuhic3@gatech.edu"
          className="inline-block mt-1 mb-8 text-accent text-[1.2rem] no-underline hover:underline"
        >
          mmuhic3@gatech.edu
        </a>

        <div className="flex justify-center gap-10">
          <a
            href="https://github.com/malachimuhic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111] transition-colors duration-150 hover:text-accent"
          >
            <Github size={28} strokeWidth={1.75} />
          </a>

          <a
            href="https://www.linkedin.com/in/malachi-muhic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111] transition-colors duration-150 hover:text-accent"
          >
            <Linkedin size={28} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
