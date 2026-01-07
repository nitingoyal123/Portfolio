import cropImg from "../assets/crop.jpg";
import safeImg from "../assets/s.a.f.e.jpeg";
import coastImg from "../assets/coast.jpg";

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Selected Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl text-md">
            A snapshot of projects where I focused on building reliable systems,
            applying ML in real-world scenarios, and solving meaningful problems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Project 1 */}
          <ProjectCard
            image={cropImg}
            title="Early Crop Disease Detection"
            description="Deep learning system for early identification of crop diseases using real-world field images."
            tech={[
              "Python",
              "TensorFlow",
                "Computer Vision",
              "Transfer Learning",
            ]}
            github={null}
            drive="https://drive.google.com/drive/folders/1NTR5veqPOMgaazQRhs6Mb_YlXnOAJ09T"
          />

          {/* Project 2 */}
          <ProjectCard
            image={safeImg}
            title="S.A.F.E. — Secure App for Fraud Elimination"
            description="Android application that detects deepfake and fraudulent messages using NLP-based ML models, alerting users in real time."
            tech={[
              "Kotlin",
              "Firebase",
              "Flask",
              "Azure ML",
              "NLP"
            ]}
            github="https://github.com/nitingoyal123/S.A.F.E/"
            drive={null}
          />

          {/* Project 3 */}
          <ProjectCard
            image={coastImg}
            title="CoastSafe"
            description="Android application that evaluates beach safety using marine and weather data from government APIs."
            tech={[
              "Android",
              "Kotlin",
              "Firebase",
              "Retrofit",
              "Google Maps SDK"
            ]}
            github="https://github.com/nitingoyal123/Beach-App-2"
            drive={null}
          />

        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECT CARD ---------------- */
function ProjectCard({ image, title, description, tech, github, drive }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f0f18] via-[#0c0c14] to-[#08080d] hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* TITLE + LINKS */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold leading-snug">
            {title}
          </h3>

          <div className="flex gap-3 text-gray-400 text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            )}
            {drive && (
              <a
                href={drive}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Drive
              </a>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* FUTURE SCOPE */}
        {title.includes("S.A.F.E.") && (
          <p className="text-xs text-gray-500 mt-4">
            Planned extensions include deepfake detection for voice, video, and image-based scams.
          </p>
        )}
      </div>
    </div>
  );
}
