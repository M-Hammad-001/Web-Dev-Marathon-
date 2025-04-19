import React from 'react'

const Stats = () => {
  return (
    <div>
        <div className="bg-white py-14">

            <div className="para para-block w-full px-4 py-6 md:px-8 lg:px-16 mt-2 mb-2 mx-auto">
                <p className="text-2xl para mb-2 text-center text-gray-600"> <span className="font-bold text-2xl text-gray-800">We are passionate about empowering learners</span> Worldwide With high-quality, accessible, and engaging education. Our mission is offering a diverse range of courses.</p> 
            </div>

            <div className="flex items-center justify-center gap-20 stats stats-block stats-vertical lg:stats-horizontal w-full mb-2 px-20 text-gray-800 ">

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">25+</div>
                    <div className="stat-desc text-gray-500 font-medium">Years of eLearning 
                        <br></br>Education Experience</div>
                    </div>
                </div>

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">56K</div>
                    <div className="stat-desc text-gray-500 font-medium">Students Enrolled in
                    <br></br>LMSZONE Courses</div>

                    </div>
                </div>

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">170+</div>
                    <div className="stat-desc text-gray-500 font-medium">Experienced Teacher's 
                        <br></br>Services</div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Stats