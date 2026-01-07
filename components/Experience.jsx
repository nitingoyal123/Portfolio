import googleImg from "../assets/photo.jpeg";

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Experience
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl text-md">
            Working on production systems and learning how large-scale
            engineering operates in practice.
          </p>
        </div>

        {/* EXPERIENCE SURFACE */}
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
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT: IMAGE */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15">
                <img
                  src={googleImg}
                  alt="Nitin at Google"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-indigo-400/20 pointer-events-none" />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Google · Bangalore · Summer 2025
              </p>
            </div>

            {/* RIGHT: TEXT */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                Software Engineering Intern
              </h3>
              <p className="text-gray-500 mb-6">
                Google Play · May 2025 – Aug 2025
              </p>

              <p className="text-gray-300 leading-relaxed mb-4 text-md">
                Worked on backend systems powering offer management workflows
                used by internal product and engineering teams at scale.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4 text-md">
                Designed and implemented a centralized Offer Management API,
                replacing fragmented logic across services and reducing manual
                administrative effort by{" "}
                <span className="text-white font-medium">80%</span>.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4 text-md">
                Refactored synchronous pipelines into non-blocking asynchronous
                Java services, improving API latency by{" "}
                <span className="text-white font-medium">83%</span> and
                eliminating timeout failures under high traffic.
              </p>

              <p className="text-gray-300 leading-relaxed text-md">
                Collaborated with senior engineers to improve testing, error
                handling, and service contracts, achieving{" "}
                <span className="text-white font-medium">95% test coverage</span>{" "}
                and production-grade reliability.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
