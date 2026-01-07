import profileImg from "../assets/my_photo.jpg";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-linear-to-br from-[#0e0e11] via-[#12121a] to-[#0b0b0f] border border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-center p-10 md:p-14">
          
          {/* LEFT: IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Nitin Goyal"
              className="w-100 h-100 md:w-72 md:h-72 object-cover rounded-2xl border border-white/20"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              About <span className="text-indigo-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              I’m Nitin Goyal, a software engineer driven by curiosity, ambition,
              and a deep interest in building systems that actually matter.
              I enjoy turning complex problems into clean, scalable solutions.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              From working on production-grade backend systems at Google to
              building AI-driven and full-stack projects on my own, I’ve always
              focused on learning by doing and pushing myself beyond comfort.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I’m currently in a strong learning phase of my career — exploring
              backend engineering, distributed systems, and applied AI — with a
              long-term goal of becoming an engineer who builds reliable,
              high-impact products at scale.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
