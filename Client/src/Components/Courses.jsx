import React from 'react'
import { Star } from 'lucide-react';


const Courses = () => {
  return (
    <div>

        <div className="px-12 py-10 relative" id='courses'>
            <button className='bg-orange-500 rounded-full px-2 py-1 top-5 absolute text-[12px] font-light left-16 -rotate-8'>Our Courses</button>
            <h2 className="text-3xl font-bold px-4 py-2 inline-block mb-10 text-center mx-auto text-gray-800">Explore Our Courses</h2>

            <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap mb-10">

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Web Development Bootcamp</h2>
                    <p className='pb-8'>
                    Learn HTML, CSS, JavaScript, and React to build responsive and dynamic websites from scratch.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YXNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Data Science</h2>
                    <p className='pb-8'>
                        Dive into data analysis, visualization, and machine learning using Python and modern libraries.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">UI/UX Design Masterclass</h2>
                    <p className='pb-8'>
                    Master the fundamentals of user interface and user experience design using Figma and Adobe XD.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>


            </div>

            {/* Second Row of Cards */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap">
                {/* App Development */}
                
                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Mobile App Development</h2>
                    <p className='pb-8'>
                        Build stunning cross-platform mobile applications using Flutter and Dart from beginner to advanced.  
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                {/* Cyber Security */}

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Cybersecurity Essentials</h2>
                    <p className='pb-8'>
                    Learn the basics of ethical hacking, network security, and how to defend against cyber threats.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                {/* Digital Marketing */}

            
                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                    alt="Web Development"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Digital Marketing Pro</h2>
                    <p className='pb-8'>
                        Explore the tools and strategies for SEO, content marketing, and social media campaigns.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>50$</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Courses