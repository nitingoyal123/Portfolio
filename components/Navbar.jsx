import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r
        from-[#0a0a0f]
        via-[#12121c]
        to-[#0a0a0f]
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* NAME */}
        <span className="text-sm font-medium tracking-wide text-gray-100">
          Nitin Goyal
        </span>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-lg text-gray-400">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative transition
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0
                  after:bg-indigo-400/70
                  hover:after:w-full after:transition-all
                "
              >
                {item}
              </a>
            )
          )}

          {/* RESUME BUTTON */}
          <a
            href="https://drive.google.com/file/d/1Lnari1aoAOr6D4bIvONMGMI2pV5_8SEf/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="
              ml-2 px-4 py-2 rounded-lg text-sm font-medium
              text-white bg-indigo-600/90 hover:bg-indigo-500 transition
            "
          >
            Resume
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden flex items-center gap-4">
          {/* RESUME */}
          <a
            href="https://drive.google.com/file/d/1Lnari1aoAOr6D4bIvONMGMI2pV5_8SEf/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="
              px-3 py-2 rounded-lg text-sm font-medium
              text-white bg-indigo-600/90
            "
          >
            Resume
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          md:hidden
          bg-[#0a0a0f]
          border-t border-white/10
        ">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-400">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
