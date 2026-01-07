export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full pt-32 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: HERO CONTENT (UNCHANGED) */}
        <div>
          {/* BIG NAME */}
          <h1 className="text-4xl md:text-8xl font-semibold tracking-tight mb-6">
            Nitin <br /> Goyal
          </h1>

          {/* PASSION LINE */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-6">
            I’m passionate about building scalable systems,
            learning deeply, and turning complex ideas into
            reliable engineering solutions.
          </p>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-400 max-w-xl mb-12">
            Software Engineer · Google SWE Intern · Backend · AI/ML · Android
          </p>

          {/* CTA */}
          <div className="flex gap-6 text-sm">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: JSON CAREER SUMMARY */}
        <div className="hidden md:block">
          <div
            className="
              rounded-2xl
              bg-[#0c0c14]
              border border-white/10
              p-6
              font-mono text-xs
              text-gray-300
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            "
          >
            <pre className="leading-relaxed">
{`{
  "name": "Nitin Goyal",
  "role": [
    "Software Engineer",
    "Machine Learning Engineer"
  ],
  "experience": {
    "company": "Google",
    "position": "Software Engineer Intern",
    "team": "Play Promotion Platform (P3)"
  },
  "skills": [
    "Java",
    "Spring Boot",
    "Python",
    "LangChain",
    "Computer Vision"
  ],
  "interests": [
    "Backend Systems",
    "Generative AI"
  ],
  "focus": "Building reliable, scalable systems",
  "status": "Open to opportunities"
}`}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
