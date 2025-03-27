import React from "react";
import { motion } from "framer-motion";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="sm:px-16 px-6 sm:py-16 py-10">
        <div className="w-full md:max-w-7xl mx-auto text-center">
          <h2 className="h2 text-brand-100">Mission</h2>

          <p className="text-black text-[17px] md:text-[22px] leading-[30px]">
            At{" "}
            <span className="text-brand font-medium">
              Rainbow Sr Secondary School
            </span>
            , we provide a nurturing environment and comprehensive facilities
            that empower students to excel both academically and personally. Our
            holistic approach prepares students to navigate life’s challenges
            with confidence, compassion, and resilience.
          </p>
        </div>

        <div className="py-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2 mb-1 text-brand">Vision and Values</h2>
              <div className="w-20 h-1 bg-yellow-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Established in 1970, Rainbow Sr Secondary School has been a
                beacon of educational excellence for over five decades. Our
                institution is built on the foundation of traditional values and
                modern pedagogy, creating an environment where students flourish
                academically, personally, and socially.
              </p>
              <p className="text-gray-700 mb-6">
                We believe in nurturing not just academic excellence but the
                overall development of a child's personality. Our curriculum is
                designed to inspire curiosity, critical thinking, and a lifelong
                love for learning.
              </p>
              <a
                href="/about"
                className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Learn More About Us
              </a>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="/img10.JPG"
                  alt="Rainbow Sr Secondary School Building"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-8 -left-8 bg-brand-100 p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">
                      Delivering Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
