import React from 'react'

const Hero = () => {
  return (
   <div>
     
     <div className="w-screen overflow-x-hidden">
      <div className="hero min-h-screen bg-base-200 w-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center w-screen px-12 gap-12">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnRzfGVufDB8fDB8fHww"
            className="w-full max-w-md rounded-lg shadow-2xl"
            alt="Student learning"
          />

          {/* Text */}
          <div className="w-full max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight">
              Smart Learning <br /> Deeper & More <span className="text-orange-500">-Amazing</span>
            </h1>
            <p className="py-6">
              Empower your future with interactive, accessible, and world-class education. Our platform
              is designed to support every learner — from curious beginners to career changers.
              Discover the smarter way to learn, anytime and anywhere.
            </p>
            <button className="btn btn-primary">Start Free Trial</button>
          </div>

        </div>
      </div>
    </div>

   </div>
  )
}

export default Hero