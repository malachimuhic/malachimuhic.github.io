import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Malachi Muhic — Portfolio',
  description:
    'ML Engineer & Georgia Tech CS grad student. Building LLM pipelines, ML systems, and full-stack tools.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-white text-[#111] font-mono text-[18px] antialiased">
        {children}
      </body>
    </html>
  );
}
