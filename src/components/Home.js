import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  items-center bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#C30E2E]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kuldeep Singh Bhadoriya
        </h1>
        <h2 className="text-4-xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the the success of the overall product
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-start hover:bg-[#C30E2E] hover:border-[#C30E2E]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 mt-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
