import React from 'react'

const FAQ = () => {
  return (
    <div>

        <div className="flex flex-col lg:flex-row w-full px-16 py-14 mt-2 mb-2 gap-8" id='faq'>

            <div className="w-full lg:w-1/2 flex items-center">
                <div className='relative'>
                    <button className='bg-orange-500 rounded-full px-2 py-1 -top-8 absolute text-[12px] font-light left-0 -rotate-8'>You need to know</button>      
                    <h1 className="text-5xl mb-4 font-bold text-left text-gray-800">Frequently Asked Questions</h1>
                    <p className="text-base md:text-sm text-gray-700 text-left">
                    Learn at your own pace with industry-expert instructors and hands-on projects. Start building your future today.
                    </p>
                </div>
            </div>

            <div className="join join-vertical w-full lg:w-1/2 max-w-2xl mx-auto text-gray-700">
                
                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">
                    How do I enroll in a course on DevSkill LMS?
                    </div>
                    <div className="collapse-content text-sm">
                    After logging in, go to the "Courses" section, select your desired course, and click the “Enroll Now” button. If the course is paid, complete the payment process to get access.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-3000">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                    Can I access my courses from mobile devices?
                    </div>
                    <div className="collapse-content text-sm">
                    Yes! DevSkill LMS is fully responsive and works seamlessly on desktops, tablets, and smartphones.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                    Will I get a certificate after completing a course?
                    </div>
                    <div className="collapse-content text-sm">
                    Yes, once you complete all modules and pass the final quiz or assignment, you’ll be able to download your certificate of completion from your dashboard.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                    How can I track my progress in a course?
                    </div>
                    <div className="collapse-content text-sm">
                    You can monitor your learning progress through the "My Courses" tab. It shows completed lessons, quiz scores, and your overall progress percentage.
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default FAQ