function Resume() {
  const experience = [
    {
      date: "Apr 2025 – Oct 2025",
      role: "Junior Machine Learning Engineer",
      company: "Highwater Labs",
      description:
        "Leveraged Python, PyTorch, Hugging Face, Docker, and FastAPI to build an end-to-end LLM fine-tuning pipeline that automated training workflows and produced LoRA/PEFT adapters for customer-specific inference tasks."
    },
    {
      date: "Aug 2024 – Jan 2025",
      role: "Data Science Intern",
      company: "Bushnell University",
      description:
        "Utilized Python frameworks like Sci-kit Learn & Tensor Flow to construct a predictive ML Random-Forest algorithm to analyze past university data to forecast student performance helping identify at-risk students and guiding strategies for decision makers"
    },
    {
      date: "Jan 2022 – Dec 2024",
      role: "IT Technician",
      company: "Bushnell University",
      description:
        "Provided onsite technical assistance and customer service to staff, faculty and trained new Helpdesk staff on IT systems and network administration tools"
    }
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        {/* Intro paragraph */}
        <p className="section-intro">
          Recent work includes multi-LoRA training pipelines, ONNX Runtime
          deployments, and ML systems that reduce GPU cost while staying
          grounded in real usage.
        </p>

        {/* Bullet summary */}
        <ul className="section-intro" style={{ paddingLeft: "1.2rem" }}>
          <li>Designed core ML training infrastructure.</li>
          <li>Built LoRA-based adaptation pipelines.</li>
          <li>Deployed dynamic adapters with ONNX Runtime.</li>
        </ul>

        {/* Download button */}
        <a
          href="/MalachiResumeWebsite.pdf"
          className="button button-primary"
          download="Malachi_Muhic_Resume.pdf"
        >
          Download CV (PDF)
        </a>

        {/* Timeline */}
        <h3 className="section-title" style={{ marginTop: "4rem" }}>
          Experience
        </h3>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              {/* Dot */}
              <div className="timeline-dot" />

              {/* Vertical line */}
              {index !== experience.length - 1 && (
                <div className="timeline-line" />
              )}

              {/* Text content */}
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
