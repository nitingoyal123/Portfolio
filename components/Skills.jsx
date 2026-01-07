export default function Skills() {
  return (
    <section id="skills" className="w-full pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Skills
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl text-,d">
            Tools and technologies I use to design, build, and scale real-world systems.
          </p>
        </div>

        {/* SKILLS SURFACE */}
        <div
          className="
            rounded-3xl
            bg-gradient-to-br
            from-[#0a0a0f]
            via-[#141421]
            to-[#0a0a0f]
            border border-white/10
            p-10 md:p-14
          "
        >
          <div className="grid md:grid-cols-2 gap-12">

            <SkillBlock
              title="Backend & Systems"
              description="Designing scalable APIs, handling data flows, and building production-ready services."
              skills={[
                "Java",
                "Spring Boot",
                "Spring Security",
                "REST APIs",
                "Hibernate / JPA",
                "JWT"
              ]}
            />

            <SkillBlock
              title="Languages & Core CS"
              description="Strong fundamentals with a focus on performance, correctness, and clean code."
              skills={[
                "Java",
                "Python",
                "C++",
                "SQL",
                "Data Structures & Algorithms"
              ]}
            />

            <SkillBlock
              title="AI / Machine Learning"
              description="Applying ML where it adds value, with a focus on real-world data and robustness."
              skills={[
                "TensorFlow / Keras",
                "Transfer Learning",
                "Computer Vision",
                "Generative AI",
                "Langchain",
                "Agentic AI"
              ]}
            />

            <SkillBlock
              title="Mobile & Web"
              description="Building user-facing applications with clean architecture and reliable data flow."
              skills={[
                "Android (Kotlin)",
                "Firebase",
                "Retrofit",
                "Google Maps SDK",
                "React",
                "Tailwind CSS"
              ]}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILL BLOCK ---------------- */
function SkillBlock({ title, description, skills }) {
  return (
    <div
      className="
        relative
        rounded-2xl
        bg-gradient-to-br
        from-[#0f0f18]
        via-[#0c0c14]
        to-[#08080d]
        border border-white/10
        p-8
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
      "
    >
      {/* subtle top highlight */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
        {description}
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="
              text-xs
              px-3 py-1.5
              rounded-full
              bg-white/5
              border border-white/10
              text-gray-300
              hover:bg-white/10
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
