import React from 'react'

export default function Services({services}) {
  return (
  <section
      id="services"
      className="bg-white text-black py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-20">
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service) => (
            <div
              key={service.number}
              className="border border-zinc-800 p-10 rounded-3xl hover:bg-blue-500 transition"
            >
              <span className="text-gray-500 text-4xl">
                {service.number}
              </span>

              <h3 className="text-2xl font-semibold mt-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
