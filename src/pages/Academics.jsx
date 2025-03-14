import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Holy Cross - Academics";
  }, []);

  const gradeLevel = [
    {
      name: "Kindergarten (Nursery to KG)",
      description:
        "An exciting phase that focuses on foundational skills in reading, writing, mathematics, and exploration of the sciences and arts.",
    },
    {
      name: "Primary (Class 1 to 5)",
      description:
        "An exciting phase that focuses on foundational skills in reading, writing, mathematics, and exploration of the sciences and arts.",
    },
    {
      name: "Middle (Class 6 to 8)",
      description:
        "A hands-on approach to learning that emphasizes critical thinking, teamwork, and the development of personal responsibility.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="sm:px-16 px-6 sm:py-16 py-10">
        <div className="text-center">
          <h1 className="text-[25px] md:text-[35px] h1 text-black md:mx-auto pb-4 md:p-0">
            Academics at <span className="text-brand">Holy Cross </span>
            School
          </h1>

          <p className="text-[17px] h-52  lg:text-[25px] font-[400] text-black-600 md:mt-4 lg:max-w-6xl lg:mx-auto">
            At <span className="text-brand font-medium">Holy Cross</span>, we
            are committed to delivering an engaging and well-rounded academic
            experience that equips students with the knowledge, skills, and
            confidence to excel. Our curriculum blends traditional academic
            rigor with innovative approaches, fostering critical thinking,
            creativity, and a lifelong love of learning.
          </p>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gradeLevel.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 flex flex-col gap-2">
                  {item.name}
                </h3>
                <div className="text-black">
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="lg:pb-16">
        {/* -----small--- */}
        <h2 className=" text-[25px] font-[500] text-black m-6 flex md:hidden">
          <spna
            className="h-[10px] w-[39px]
      m-2 mt-[14px] bg-[#FF0000]"
          ></spna>
          Learning Environment
        </h2>

        <div className=" flex flex-col-reverse sm:flex sm:flex-row bg-lamaYellow lg:h-[451px]">
          <div className="">
            {/* -----large--- */}
            <h2 className="hidden md:text-[35px] font-semibold text-black  md:flex md:m-4 lg:pl-16 lg:pr-4 lg:pt-16">
              <spna className=" h-[15px] sm:w-[70px] gradient-bar sm:mt-4 md:mr-4 "></spna>
              Learning Environment
            </h2>
            <p className="w-auto text-black-700 text-[17px] md:text-[25px]  font-[400] p-4 sm:pt-4 sm:pl-16 sm:pr-4 sm:pb-4 ">
              AstraGroove embraces a student-centered approach that adapts to
              different learning styles. Our modern classrooms and facilities
              are equipped with the latest technology to enhance interactive
              learning. Small class sizes allow for personalized attention and
              foster strong student-teacher connections.
            </p>
          </div>
          {/* <div className="w-auto sm:w-[1512px] sm:h-auto">
            <img
              src={img7}
              alt="Learning Environment"
              className="sm:h-full object-cover "
            />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Academics;
