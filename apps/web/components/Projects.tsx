'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const [selectedSkills, setSelectedSkills]     = useState<string[]>([]);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return projects;
    return projects.filter((p) =>
      p.tags.some((tag) => selectedSkills.includes(tag))
    );
  }, [selectedSkills]);

  const toggleExpanded = (id: string) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="projects"
      className="relative z-[1] bg-white py-[4.5rem]"
    >
      <div className="max-w-site mx-auto px-6">
        <h2 className="text-[2.2rem] font-bold mb-8">Projects</h2>

        {/* Skill filter chips */}
        <div className="mb-4">
          {allSkills.map((skill) => {
            const isActive = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={[
                  'inline-block m-1 px-[0.85rem] py-[0.45rem] rounded-md text-[0.95rem] cursor-pointer border transition-all duration-150',
                  isActive
                    ? 'bg-accent border-accent text-[#111] scale-[1.08] skill-chip-active'
                    : 'bg-[#f2f6fb] border-border hover:scale-[1.06]',
                ].join(' ')}
              >
                {skill}
              </button>
            );
          })}
        </div>

        {selectedSkills.length > 0 && (
          <p className="mb-6 text-[0.95rem] text-muted">
            Filtering by: {selectedSkills.join(', ')}
          </p>
        )}

        {/* Project cards */}
        <div className="grid gap-7 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {filteredProjects.map((p) => {
            const isExpanded = !!expandedProjects[p.id];

            return (
              <article
                key={p.id}
                className="rounded-md p-6 border border-border bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>

                <p
                  className={[
                    'text-muted mb-2 transition-all duration-150',
                    isExpanded
                      ? 'project-description--expanded'
                      : 'project-description--clamped',
                  ].join(' ')}
                >
                  {p.description}
                </p>

                <button
                  type="button"
                  onClick={() => toggleExpanded(p.id)}
                  className="my-1 p-0 border-none bg-transparent text-accent text-[0.85rem] cursor-pointer inline-flex items-center gap-1 hover:underline"
                >
                  {isExpanded ? (
                    <>Show less <ChevronUp size={16} strokeWidth={2} /></>
                  ) : (
                    <>Show more <ChevronDown size={16} strokeWidth={2} /></>
                  )}
                </button>

                <div className="flex justify-between items-end gap-3 mt-1 flex-wrap">
                  <div>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block mr-1 mt-1 px-[0.6rem] py-1 text-xs rounded-md bg-[#f2f6fb]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-md border border-border bg-transparent text-[#111] text-[0.9rem] no-underline transition-colors duration-150 hover:border-accent"
                  >
                    View project
                  </a>
                </div>
              </article>
            );
          })}

          {filteredProjects.length === 0 && (
            <p className="text-muted">No projects match the selected skills yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
