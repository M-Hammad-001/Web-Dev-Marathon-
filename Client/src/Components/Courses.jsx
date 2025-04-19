import React from 'react'

const Courses = () => {
  return (
    <div>
      <div className="px-6 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold border border-primary rounded-lg px-4 py-2 inline-block mb-10 text-center mx-auto w-fit">
        Explore Our Courses
      </h2>

      {/* First Row of Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap mb-10">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Course"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Course Title {index + 1}</h2>
              <p>
                Unlock your potential with this carefully crafted course that helps you master new skills with ease.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row of Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap">
        {[4, 5, 6].map((_, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Course"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Course Title {index + 1}</h2>
              <p>
                Learn from the best instructors and become confident in your knowledge with practical insights.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Courses