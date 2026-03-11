export default function About() {
  return (
    <section
      id="about"
      className="relative z-[1] py-[4.5rem]"
    >
      <div className="max-w-site mx-auto px-6">
        <h2 className="text-[2.2rem] font-bold mb-8">About Me</h2>

        <div className="space-y-4 text-[1.15rem] text-muted max-w-[36rem]">
          <p>
            I&apos;m a grad student at Georgia Tech studying computer science and
            an aspiring machine learning engineer. I&apos;m focused on building
            cool tools and awesome gadgets.
          </p>

          <p>
            I hope one day to build something interesting enough to change the
            world for the better, but for now, here is a minimal portfolio
            website. Please check it out!
          </p>
        </div>
      </div>
    </section>
  );
}
