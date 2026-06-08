import React from 'react'

export default function Projects() {
  // 💡 FIX: Define the missing projects array here
  const projects = [
    {
      title: "Enterprise Penetration Testing",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interactive Stock Management Dashboard",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Global Cyber Training Portal",
      category: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
     <section
      id="projects"
      className="bg-[#111] text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-20">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="mt-6">
                <p className="text-gray-500">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}