import React from 'react'
import { MoveUpRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
   <div>
     
      <div className="overflow-x-hidden" id='hero'>
        <div className="hero min-h-screen w-screen bg-linear-to-b from-white to-orange-100">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center w-screen gap-12 pt-30">

            <main className='w-[700px] h-[700px]'>
              <Spline scene="https://prod.spline.design/uMR3ft60n1Fb5Oke/scene.splinecode" />
            </main>


            <div className="w-full max-w-2xl relative">
              <button className='bg-orange-500 rounded-full px-2 py-1 -top-8 absolute text-[12px] font-light left-0 -rotate-8'>e-learning plateform</button>
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Smart Learning <br /> Deeper & More <span className="text-orange-500"> <br /> -Amazing</span>
              </h1>
              <p className="py-6 text-gray-600">
                Empower your future with interactive, accessible, and world-class education. Our platform
                is designed to support every learner — from curious beginners to career changers.
                Discover the smarter way to learn, anytime and anywhere.
              </p>
              <button className="btn rounded-full bg-emerald-600 px-4 py-4 border-0">Start Free Trial <MoveUpRight className='w-5 h-5' /></button>
            </div>

          </div>
        </div>
      </div>

   </div>
  )
}

export default Hero