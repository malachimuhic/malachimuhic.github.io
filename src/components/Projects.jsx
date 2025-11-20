
const projects = [
  {
    title: "Multi-LoRA Training & Runtime Pipeline",
    description:
      "Made changes to an end-to-end PyTorch training system to fix inference and allow flexible extension and fine-tuning of transformer models through LoRA, a lightweight and parameter-efficient method for training.",
    tags: ["Python", "LoRA", "ONNX Runtime", "FastAPI"],
    link: "https://github.com/malachimuhic/Torch2Jax-DeepSeek-R1-Distill-Qwen-1.5B",
  },
  {
    title: "HoopAI – NBA Game Outcome Prediction",
    description:
      "HoopAI is a machine learning project designed to predict NBA game outcomes based on historical team performance data. Using rolling statistics and feature engineering, HoopAI builds models to forecast both point differentials and win/loss results for NBA matchups.",
    tags: ["Python", "scikit-learn", "XGBoost"],
    link: "https://github.com/malachimuhic/HoopAI",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div>
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}</span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
