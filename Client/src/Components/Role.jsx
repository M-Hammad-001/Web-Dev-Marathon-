    import React from 'react'
    import { GraduationCap } from 'lucide-react';


    const Role = () => {
    return (
        <div>

            <div className="text-center py-16 px-4" id='mentors'>

                <h2 className="text-4xl font-bold mb-4 text-gray-800">What You Looking For?</h2>
                <p className="mb-10 text-gray-600 pb-8">
                    Our dynamic educational platform offers you the tools and resources to propel yourself towards a brighter future
                </p>

                {/* Cards in Flex Row */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                    {/* Teach Card */}
                    <div className="card bg-white w-96 shadow-md p-4">
                        <GraduationCap className='w-14 h-14 text-orange-500' />
                        <div className="card-body text-left text-gray-700 p-4 ">
                            <h2 className="card-title text-left">Do you want to teach here?</h2>
                            <p className='pb-4'>Share your knowledge with a global audience and inspire learners by becoming an instructor on our platform.</p>
                            <div className="card-actions justify-start">
                                <button className="btn rounded-full bg-gray-800 px-4 py-4 border-0">Get started</button>
                            </div>
                        </div>
                    </div>

                    {/* Learn Card */}
                    <div className="card bg-orange-500 w-96 shadow-md p-4">
                        <GraduationCap className='w-14 h-14 text-white' />
                        <div className="card-body text-left text-white p-4 ">
                            <h2 className="card-title text-left">Do you want to learn here?</h2>
                            <p className='pb-4'>Unlock a world of knowledge with expertly designed courses and hands-on learning experiences for every level.</p>
                            <div className="card-actions justify-start">
                                <button className="btn rounded-full bg-white px-4 py-4 border-0 text-gray-700">Get started</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
    }

    export default Role