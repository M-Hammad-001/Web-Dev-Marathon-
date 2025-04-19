import React from 'react'

const Reviews = () => {
  return (
    <div>

        <div className="py-20 px-4 bg-orange-200 relative" id='reviews'>
            
            <h2 className="text-4xl font-bold text-center mb-12 text-black">What Our Students Say!  </h2>
            <div className="flex flex-wrap justify-center gap-8">

                    {[
                    {
                        course: 'Web Development Bootcamp',
                        name: 'Sarah L.',
                        rating: 5,
                        text: 'This platform helped me land my first job in tech. The content is super well-structured and easy to follow. Highly recommend!',
                    },
                    {
                        course: 'JavaScript Mastery',
                        name: 'Daniel K.',
                        rating: 4,
                        text: 'I love the pace of the courses and the mentorship sessions. It’s like having a coach throughout the journey.',
                    },
                    {
                        course: 'React for Beginners',
                        name: 'Aisha M.',
                        rating: 5,
                        text: 'The instructors are fantastic and very responsive. The quality of content is better than many paid platforms.',
                    },
                    {
                        course: 'Data Structures & Algorithms',
                        name: 'Ravi P.',
                        rating: 3,
                        text: 'As a beginner, I found everything I needed to get started and feel confident. The community is also super friendly!',
                    },
                    {
                        course: 'Python Programming',
                        name: 'Fatima Z.',
                        rating: 5,
                        text: 'The projects helped me build a strong portfolio. I’ve even gotten freelance offers thanks to them!',
                    },
                    {
                        course: 'Full Stack Development',
                        name: 'Omar H.',
                        rating: 5,
                        text: 'I never thought learning online could be this engaging. DEVSKILL Academy changed my perspective completely!',
                    },
                    ].map((review, index) => (
                    <div
                        key={index}
                        className="card w-96 bg-white text-black shadow-md border border-gray-200 rounded-xl transition duration-300 hover:shadow-xl"
                    >
                        <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">{review.course}</h2>
                        <p className="text-base">"{review.text}"</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <input
                                key={i}
                                type="radio"
                                name={`rating-${index}`}
                                className="mask mask-star-2 bg-yellow-400"
                                checked={i < review.rating}
                                readOnly
                                />
                            ))}
                            </div>
                            <span className="font-medium italic">- {review.name}</span>
                        </div>
                        </div>
                    </div>
                    ))}

            </div>

        </div>
    </div>
  )
}

export default Reviews