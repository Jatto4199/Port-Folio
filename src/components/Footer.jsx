import React from 'react'

export default function Footer() {
   const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-black text-white border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              KSG.
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Cybersecurity Analyst, FUll Stack Developer and
              Technology Educator focused on creating secure
              and impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#awards"
                  className="hover:text-white transition"
                >
                  Awards
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Connect
            </h3>

            <div className="space-y-3 text-zinc-400">
              <p>jattobatholomew@gmail.com</p>
              <p>+234 8168492206|08072191188</p>

              <div className="flex gap-5 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href="linkedin.com/in/jatto-batholomew-037870209"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  X
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">

          <p>
            © {currentYear} KSG Portfolio. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Developed with React + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
    
  )
}
