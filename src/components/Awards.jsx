import React from 'react'

export default function Awards() {
  
  const awards = [
    {
      title: "Excellence in Cybersecurity Training Initiatives",
      year: "2026"
    },
    {
      title: "Outstanding Performing Cyber Security Instructor",
      year: "2024"
    },
    {
      title: "Best Cyber security intern",
      year: "2021"
    },
    {
      title: "Innovative Enterprise Software Architecture",
      year: "2024"
    }
  ];

  return (
      <section
      id="awards"
      className="bg-black text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Awards
        </h2>

        {awards.map((award, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-zinc-800 py-8"
          >
            <h3>{award.title}</h3>
            <span>{award.year}</span>
          </div>
        ))}

      </div>
    </section>
  )
}