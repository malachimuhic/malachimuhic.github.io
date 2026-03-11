'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

type CursorState = 'typing' | 'finishing' | 'hidden';
type TypewriterPhase = 'typing-wrong' | 'deleting' | 'typing-correct' | 'done';

function TypewriterName({ onDone }: { onDone?: () => void }) {
  const wrongName   = 'Malchi Muhic';
  const correctName = 'Malachi Muhic';

  const [text, setText]   = useState('');
  const [phase, setPhase] = useState<TypewriterPhase>('typing-wrong');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (phase === 'typing-wrong') {
      if (index < wrongName.length) {
        id = setTimeout(() => {
          setText((prev) => prev + wrongName[index]!);
          setIndex((i) => i + 1);
        }, 120);
      } else {
        id = setTimeout(() => {
          setPhase('deleting');
          setIndex(wrongName.length);
        }, 800);
      }
    } else if (phase === 'deleting') {
      if (index > 0) {
        id = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setIndex((i) => i - 1);
        }, 70);
      } else {
        id = setTimeout(() => {
          setPhase('typing-correct');
          setIndex(0);
        }, 500);
      }
    } else if (phase === 'typing-correct') {
      if (index < correctName.length) {
        id = setTimeout(() => {
          setText((prev) => prev + correctName[index]!);
          setIndex((i) => i + 1);
        }, 120);
      } else {
        setPhase('done');
        onDone?.();
      }
    }

    return () => clearTimeout(id);
  }, [phase, index, wrongName, correctName, onDone]);

  return <>{text}</>;
}

export default function Hero() {
  const [cursorState, setCursorState] = useState<CursorState>('typing');

  useEffect(() => {
    if (cursorState !== 'finishing') return;
    const id = setTimeout(() => setCursorState('hidden'), 4000);
    return () => clearTimeout(id);
  }, [cursorState]);

  const cursorClass =
    cursorState === 'hidden'
      ? 'hero-cursor hero-cursor--hidden'
      : cursorState === 'finishing'
      ? 'hero-cursor hero-cursor--finishing'
      : 'hero-cursor hero-cursor--typing';

  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Content floated to the right of the sidebar */}
        <div className="flex flex-col items-start ml-auto">
        <div className="flex flex-col items-start">
          <Image
            src="/me.png"
            alt="Portrait of Malachi Muhic"
            width={180}
            height={180}
            className="hero-photo"
            priority
          />

          <h1 className="text-[1.75rem] font-bold m-0 mt-4 mb-3 whitespace-nowrap">
            Malachi Muhic
          </h1>

          {/* Social links — vertical list */}
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://github.com/malachimuhic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] no-underline inline-flex items-center gap-[0.4rem] transition-colors duration-150 hover:text-accent"
            >
              <Github size={20} strokeWidth={1.75} />
              GitHub
            </a>

            <a
              href="https://medium.com/@malachimuhic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] no-underline inline-flex items-center gap-[0.4rem] transition-colors duration-150 hover:text-accent"
            >
              <BookOpen size={20} strokeWidth={1.75} />
              Medium
            </a>

            <a
              href="https://www.linkedin.com/in/malachi-muhic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] no-underline inline-flex items-center gap-[0.4rem] transition-colors duration-150 hover:text-accent"
            >
              <Linkedin size={20} strokeWidth={1.75} />
              LinkedIn
            </a>

            <a
              href="mailto:mmuhic3@gatech.edu"
              className="text-[#111] no-underline inline-flex items-center gap-[0.4rem] transition-colors duration-150 hover:text-accent"
            >
              <Mail size={20} strokeWidth={1.75} />
              Email
            </a>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
