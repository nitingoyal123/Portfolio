import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Let’s Connect
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Feel free to reach out for opportunities, collaborations, or just a
          quick conversation.
        </p>

        {/* ICON LINKS */}
        <div className="flex justify-center gap-10">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/nitin-goyal-b0151825b/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0c0c14] group-hover:border-indigo-400/40 transition">
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/nitingoyal123"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0c0c14] group-hover:border-indigo-400/40 transition">
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:goyalnitin635@gmail.com"
            className="group"
          >
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0c0c14] group-hover:border-indigo-400/40 transition">
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
            </div>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/nitinn.goyal/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0c0c14] group-hover:border-indigo-400/40 transition">
              <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
