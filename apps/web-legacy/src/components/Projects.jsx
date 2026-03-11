import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "LLM: LoRA Training & Runtime Pipeline",
    description:
      "Made changes to an end-to-end PyTorch training system to fix inference and allow flexible extension and fine-tuning of transformer models through LoRA, a lightweight and parameter-efficient method for training.",
    tags: ["Python", "LoRA", "ONNX Runtime", "FastAPI"],
    link: "https://github.com/malachimuhic/Torch2Jax-DeepSeek-R1-Distill-Qwen-1.5B",
  },
  {
    title: "HoopAI – NBA Game Outcome Prediction",
    description:
      "HoopAI is a machine learning project designed to predict NBA game outcomes based on historical team performance data. Using rolling statistics and feature engineering, HoopAI builds models to forecast both point differentials and win/loss results for NBA matchups.",
    tags: ["Python", "Scikit-learn", "XGBoost"],
    link: "https://github.com/malachimuhic/HoopAI",
  },
];

function Projects() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState({}); // title -> bool

  // Derive the skills list from project tags so everything always matches
  const allSkills = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill) // deselect
        : [...prev, skill]                // select
    );
  };

  // OR-logic: any project with at least one selected skill stays
  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => selectedSkills.includes(tag))
    );
  }, [selectedSkills]);

  const toggleExpanded = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Skills filter row */}
        <div className="skills-filter">
          {allSkills.map((skill) => {
            const isActive = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                className={`skill-chip ${isActive ? "active" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </button>
            );
          })}
        </div>

        {selectedSkills.length > 0 && (
          <p className="skills-selected">
            Filtering by: {selectedSkills.join(", ")}
          </p>
        )}

        <div className="projects-grid">
          {filteredProjects.map((p) => {
            const isExpanded = !!expandedProjects[p.title];

            return (
              <article key={p.title} className="project-card">
                <h3>{p.title}</h3>

                <p
                  className={
                    "project-description " +
                    (isExpanded
                      ? "project-description--expanded"
                      : "project-description--clamped")
                  }
                >
                  {p.description}
                </p>

                <button
                  type="button"
                  className="project-toggle"
                  onClick={() => toggleExpanded(p.title)}
                >
                  {isExpanded ? (
                    <>
                      Show less{" "}
                      <ChevronUp
                        size={16}
                        strokeWidth={2}
                        className="project-toggle-icon"
                      />
                    </>
                  ) : (
                    <>
                      Show more{" "}
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="project-toggle-icon"
                      />
                    </>
                  )}
                </button>

                <div className="project-meta-row">
                  <div>
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    className="button button-ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project
                  </a>
                </div>
              </article>
            );
          })}

          {filteredProjects.length === 0 && (
            <p className="project-description">
              No projects match the selected skills yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
