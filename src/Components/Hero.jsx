import React from "react";
import { LuBookOpen, LuCode, LuCopy, LuTrendingUp } from "react-icons/lu";
import { FaCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdBrightness6 } from "react-icons/md";
import { SiReact, SiTailwindcss } from "react-icons/si";
import darkCode from "../public/darkcode.png";
import lightCode from "../public/lightcode.png";

const Hero = ({ darkMode }) => {
  return (
    <div className="">
      <div className="inset-0 absolute -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 rounded-full blur-3xl hover:bg-amber-500 opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-28">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:gap-12 xl:gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="items-center">
                {/* <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2'>NEW</span> */}
                <h2 className="flex px-3 py-1.5 lg:px-4 lg:py-2 bg-neutral-900 rounded-full w-max text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50">
                  <LuTrendingUp className="mr-1" /> Next Generation Design
                  System
                </h2>
                <h1 className="text-4xl md:text-5xl  lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white py-5">
                  <span className="block mb-1">Design</span>
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 via-amber-400 to-amber-600">
                    Whitout Limits
                  </span>
                </h1>
                <p className="font-base max-w-2xl lg:text-lg text-neutral-700 dark:text-neutral-300 font-medium">
                  Elevate your web projects with our streamlined design system
                  powered by the latest tialwind CSS v4. Create stunning user
                  experiences with-state-of-the-art theme switching.
                </p>
                <div className="flex gap-3 items-center pt-3">
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12 "></div>
                  <p className="tracking-widest text-xs uppercase font-medium text-neutral-500 dark:text-neutral-400">
                    transition seamlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <button className="px-4 py-3 lg:px-7 lg:3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:shadow-amber-500/20 flex items-center transition-all group">
                  <LuCode className="mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
                  <span>Strat Coding</span>
                </button>

                <button className="px-4 py-3 lg:px-7 lg:3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:text-white border border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 font-medium flex items-center dark:border-neutral-700 transition-all group">
                  <LuBookOpen className="mr-2 lg:mr-3 text-lg opacity-70 lg:text-xl group-hover:opacity-100 transition-opacity" />
                  <span>Documentation</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                    alt="User"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt="User"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                    alt="User"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                  />
                  <span className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 flex justify-center items-center bg-neutral-900 dark:bg-amber-500 text-xs font-medium text-white dark:text-neutral-900">
                    5K
                  </span>
                </div>
                <div className="space-y-1 ml-3">
                  <div className="flex items-center">
                    <FaStar className="text-amber-500 mr-1" />
                    <FaStar className="text-amber-500 mr-1" />
                    <FaStar className="text-amber-500 mr-1" />
                    <FaStar className="text-amber-500 mr-1" />
                    <FaStarHalfAlt className="text-amber-500 mr-1" />
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1">
                      4.8 / 5
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Trusted by{" "}
                    <span className="font-bold text-neutral-900 dark:text-white">
                      5,000+
                    </span>
                    developers worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -z-10 -inset-1 bg-linear-to-r from-amber-600 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse "></div>
              <div className="bg-white p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                <div className="flex justify-between items-center mb-3 mb:4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 lg:w-3  lg:h-3 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 lg:w-3  lg:h-3 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 lg:w-3  lg:h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    darkmode.jsx
                  </div>
                </div>
                <div className="h-56 md:h-64 lg:60 xl:72 rounded-2xl relative bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <img
                    src={darkMode ? darkCode : lightCode}
                    className="w-full h-full object-contain"
                    alt="code snippets"
                  />

                  <div className="absolute right-4 bottom-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-linear-to-r from-amber-400 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse">
                      <MdBrightness6 className="text-xl lg:text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex items-center">
                  <div className="flex justify-between w-full gap-2">
                  <div className="flex gap-1">
                      <span className="px-1.5 pt-1 lg:3 rounded-full bg-neutral-900 text-amber-400  gap-1 text-xs font-medium flex items-center justify-center">
                      <SiTailwindcss className="flex items-center" /> tailwind
                      v4
                    </span>
                    <span className="px-1.5 pt-1 lg:3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 text-xs font-medium flex items-center gap-1 justify-center border border-neutral-200 dark:border-neutral-900">
                      <SiReact className="flex items-center" /> tailwind
                      v4
                    </span>
                  </div>
                    <button className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition ">
                      <LuCopy className="text-sm"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 lg:left-10 animate-bounce">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-sm flex items-center shadow-lg">
          <FaCheckCircle className="mr-1 text-amber-500"/> Responsive
        </div>
      </div>
      <div className="hidden md:block absolute top-16 right-[15%] lg:top-20 lg:right-[20] delay-300  animate-bounce">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-sm flex items-center shadow-lg">
          <FaCheckCircle className="mr-1 text-amber-500"/> Accessible
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
