import React from 'react'

export default function Hero({hero}) {
  return (
    <section className="min-h-screen bg-blue-500 text-black">

      <div className="max-w-7xl mx-auto px-6 pt-40">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
               <p className="text-black font-bold md:text-4xl mt-8 max-w-lg">
              {hero.name}
            </p>
            <p className="uppercase tracking-[6px] text-gray-400">
              {hero.role}
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-none">
              Creating
              <br />
              Digital
              <br />
              Impact
            </h1>

            <p className="text-gray-400 mt-8 max-w-lg">
              {hero.description}
            </p>
         
          </div>

          <div>
            <img
              src={hero.image}
              // alt={hero.name}
              className="rounded-3xl h-175 w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
