import { useEffect, useState } from "react";
import PropTypes from "prop-types";                // 👈 add this
import profile from "/assets/images/me.png";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

function TypewriterName({ onDone }) {
  const wrongName = "Malchi Muhic";
  const correctName = "Malachi Muhic";

  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing-wrong"); 
  // "typing-wrong" | "deleting" | "typing-correct" | "done"
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (phase === "typing-wrong") {
      if (index < wrongName.length) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev + wrongName[index]);
          setIndex((i) => i + 1);
        }, 120); // typing speed
      } else {
        // pause, then start deleting
        timeoutId = setTimeout(() => {
          setPhase("deleting");
          setIndex(wrongName.length);
        }, 800);
      }
    } else if (phase === "deleting") {
      if (index > 0) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setIndex((i) => i - 1);
        }, 70); // delete speed
      } else {
        // fully deleted → pause, then type correct name
        timeoutId = setTimeout(() => {
          setPhase("typing-correct");
          setIndex(0);
        }, 500);
      }
    } else if (phase === "typing-correct") {
      if (index < correctName.length) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev + correctName[index]);
          setIndex((i) => i + 1);
        }, 120);
      } else {
        // finished typing correctly
        setPhase("done");
        if (onDone) onDone();   // 👈 notify Hero that typing is done
      }
    }

    return () => clearTimeout(timeoutId);
  }, [phase, index, wrongName, correctName, onDone]);

  return <>{text}</>;
}

// ✅ PropTypes for ESLint
TypewriterName.propTypes = {
  onDone: PropTypes.func,
};

function Hero() {
  // cursorState: "typing" (infinite), "finishing" (5 blinks), "hidden" (gone)
  const [cursorState, setCursorState] = useState("typing");

  // after we switch to "finishing", wait ~5 blinks (5 * 0.8s = 4s), then hide
  useEffect(() => {
    if (cursorState !== "finishing") return;

    const timeoutId = setTimeout(() => {
      setCursorState("hidden");
    }, 4000); // 5 blinks * 0.8s

    return () => clearTimeout(timeoutId);
  }, [cursorState]);

  const cursorClass =
    cursorState === "hidden"
      ? "hero-cursor hero-cursor--hidden"
      : cursorState === "finishing"
      ? "hero-cursor hero-cursor--finishing"
      : "hero-cursor hero-cursor--typing";

  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Left side */}
        <div className="hero-copy">
          <h1 className="hero-title hero-title-typing">
            <TypewriterName onDone={() => setCursorState("finishing")} />
            <span className={cursorClass} aria-hidden="true">
              |
            </span>
          </h1>
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
              href="https://medium.com/@malachimuhic"
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
