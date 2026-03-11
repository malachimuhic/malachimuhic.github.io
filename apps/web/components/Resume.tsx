import type { Experience } from '@malachimuhic/shared';

const experience: Experience[] = [
  {
    id: '1',
    date: 'Apr 2025 – Oct 2025',
    role: 'Junior Machine Learning Engineer',
    company: 'Highwater Labs',
    description:
      'Leveraged Python, PyTorch, Hugging Face, Docker, and FastAPI to build an end-to-end LLM fine-tuning pipeline that automated training workflows and produced LoRA/PEFT adapters for customer-specific inference tasks.',
  },
  {
    id: '2',
    date: 'Aug 2024 – Jan 2025',
    role: 'Data Science Intern',
    company: 'Bushnell University',
    description:
      'Utilized Python frameworks like Sci-kit Learn & TensorFlow to construct a predictive ML Random-Forest algorithm to analyze past university data to forecast student performance helping identify at-risk students and guiding strategies for decision makers.',
  },
  {
    id: '3',
    date: 'Jan 2022 – Dec 2024',
    role: 'IT Technician',
    company: 'Bushnell University',
    description:
      'Provided onsite technical assistance and customer service to staff, faculty and trained new Helpdesk staff on IT systems and network administration tools.',
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative z-[1] bg-white py-[4.5rem]"
    >
      <div className="max-w-site mx-auto px-6">
        <h2 className="text-[2.2rem] font-bold mb-8">Resume</h2>

        <p className="text-[1.15rem] text-muted max-w-[36rem] mb-4">
          Recent work includes multi-LoRA training pipelines, ONNX Runtime
          deployments, and ML systems that reduce GPU cost while staying
          grounded in real usage.
        </p>

        <ul className="text-[1.15rem] text-muted max-w-[36rem] pl-5 mb-6 space-y-1 list-disc">
          <li>Designed core ML training infrastructure.</li>
          <li>Built LoRA-based adaptation pipelines.</li>
          <li>Deployed dynamic adapters with ONNX Runtime.</li>
        </ul>

        <a
          href="/MalachiResumeWebsite.pdf"
          className="inline-block mt-4 px-5 py-2.5 rounded-md bg-accent border border-accent text-[#111] text-sm no-underline transition-colors duration-150 hover:bg-accent-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV (PDF)
        </a>

        <h3 className="text-[2.2rem] font-bold mt-16 mb-8">Experience</h3>

        <div className="relative mt-8">
          {experience.map((item, i) => (
            <div key={item.id} className="relative pl-12 mb-16">
              {/* Dot */}
              <div className="timeline-dot" />

              {/* Vertical line */}
              {i !== experience.length - 1 && (
                <div
                  className="absolute left-[0.95rem] top-5 w-0.5 bg-[#dce7f3]"
                  style={{ height: 'calc(100% + 2rem)' }}
                />
              )}

              {/* Content */}
              <div className="ml-4">
                <span className="text-[0.95rem] font-semibold text-accent block mb-2">
                  {item.date}
                </span>
                <h3 className="m-0 text-[1.6rem] font-bold leading-tight">
                  {item.role}
                </h3>
                <p className="mt-1 mb-4 text-[1.1rem] text-muted">
                  {item.company}
                </p>
                <p className="max-w-[42rem] leading-relaxed text-[#111]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
