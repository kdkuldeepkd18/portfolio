import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Angular from "../assets/angular.png";
import WordPress from "../assets/WordPress.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import npm from "../assets/npmjs.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React",
      style: "shadow-blue-500",
    },

    {
      id: 5,
      src: Angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: GitHub,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 7,
      src: npm,
      title: "NPM",
      style: "shadow-rose-500",
    },
    {
      id: 8,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="flex justify-center items-center sm:text-right sm:pb-[60px] pb-[30px]">
          <p className="text-4xl font-bold inline border-b-4 border-[#e45447]">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//   return (
// //     <div
// //       name="skills"
// //       className="w-full h-screen text-black-300 bg-scroll ... skills-div bg-[#000]"
// //     >
// //       {/* Container */}
// //       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
// //         <div>
// //           <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
// //             Skills
// //           </p>
// //           <p className="py-4">// These are the technologies I've worked with</p>
// //         </div>

// //         <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
// //             <p className="my-4">HTML</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
// //             <p className="my-4">CSS</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
// //             <p className="my-4">JAVASCRIPT</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
// //             <p className="my-4">REACT</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={Angular} alt="HTML icon" />
// //             <p className="my-4">Angular</p>
// //           </div>
// //           {/*
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
// //             <p className="my-4">NODE JS</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
// //             <p className="my-4">MONGO DB</p>
// //           </div>*/}
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={npm} alt="HTML icon" />
// //             <p className="my-4">NPM</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={WordPress} alt="HTML icon" />
// //             <p className="my-4">WordPress</p>
// //           </div>
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
// //             <p className="my-4">GITHUB</p>
// //           </div>
// //           {/*
// //           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
// //             <p className="my-4">Tailwind</p>
// //           </div>
// //            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
// //             <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
// //             <p className="my-4">FireBase</p>
// //           </div> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

export default Skills;
