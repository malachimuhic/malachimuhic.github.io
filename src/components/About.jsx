import  { useState } from "react";

function About() {
  const skills = [
  "Python",
  "ML",
   "NLP",
   "Frontend",
   "React",
   "HTML5",
   "CSS3",
   "Data Engineering",
   "SQL",
   "Robot Localization",
   "PID Controls",
   "Smoothing Algorithms",
   "Pathfinding",
    "SLAM Alg",
    "PyTorch",
    "Docker",
    "GCP",
    "Azure",
    "Git",
    "LoRA",
    "DPO",
    "Fast API",
    "Hugging Face",
    "LLM",
    "Sci-Kit-Learn",
    "TensorFlow",
];


  // Track which skills are “selected”
  const [activeSkills, setActiveSkills] = useState({});

  const toggleSkill = (skill) => {
    setActiveSkills((prev) => ({
      ...prev,
      [skill]: !prev[skill], // toggle
    }));
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* LEFT SIDE: Paragraphs */}
          <div className="about-copy">
            <p className="section-intro">
                I’m a grad student at Georgia Tech studying computer science and an aspiring 
                machine learning engineer. I’m focused on building cool tools and awesome gadgets.
              </p>

              <p className="section-intro">
                I hope one day to build something interesting enough to change the world for the better, but 
                for now, here is a minimal portfolio website. Please check it out!
              </p>
          </div>

          {/* RIGHT SIDE: Skills */}
          <div className="about-skills">
            {skills.map((skill) => (
              <button
                key={skill}
                className={`skill-chip ${activeSkills[skill] ? "active" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
