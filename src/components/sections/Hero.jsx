import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen max-h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/img11.JPG"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto sm:px-16 px-6 sm:py-16 py-10 h-full flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Minds, Inspiring Futures
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Rainbow Sr Secondary School offers a holistic education that
            nurtures academic excellence, cultural values, and personal growth
            for the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/admissions"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-center font-medium transition duration-300"
            >
              Admission Enquiry
            </a>
            <a
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-md text-center font-medium transition duration-300"
            >
              Discover More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
