import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import { img1, img2, img3, img4 } from "../assets";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="grid grid-cols-2 gap-4 px-10">
        {images.map((image, index) => (
          <div className="relative group" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded-md w-full h-full md:h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Holy Cross - Home";
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Announcements Bar */}
      <div className="bg-brand text-white py-3 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold mr-3">LATEST ANNOUNCEMENTS:</span>
            <span className="text-sm">
              Admissions for 2025-2026 academic year are now open
            </span>
          </div>
          <a
            href="/announcements"
            className="text-white text-sm hover:underline flex items-center"
          >
            View All <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>

      {/* Intoduction Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-[0.5rem]">
                <div className="w-[40px] h-[4px] mb-[0.25rem] gradient-bar" />
                <h1 className="h1 text-primaryBlue-600">Introduction</h1>
              </div>
              <p className="text-[17px] lg:text-[25px] font-normal leading-[36px] text-black-300 mb-[1.5rem]">
                At Holy Cross, foster a dynamic learning environment where every
                child's potential is nurtured. Our innovative curriculum, led by
                passionate educators, encourages curiosity, critical thinking,
                and collaboration. We focus on both academic and personal
                growth, developing students into compassionate, confident, and
                skilled individuals. Through enriching programs and supportive
                guidance, we prepare our students to tackle future challenges
                with creativity, resilience, and integrity.
              </p>
              <a
                href="/about"
                className="inline-block bg-primaryBlue text-white px-6 py-3 rounded-md font-medium transition duration-300"
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
                  src="/IMG-20250309-WA0003.jpg"
                  alt="School Name Building"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-8 -left-8 bg-brand-100 p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">50+</div>
                    <div className="text-base uppercase tracking-wider">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message from principal desk section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10">
        <div className="mb-[2rem] flex flex-col items-center">
          <div>
            <div className="w-[40px] h-[4px] mb-[0.25rem] gradient-bar" />
            <h2 className="h2 text-primaryBlue-600">
              A Message from the Principal Desk
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 items-center justify-center mx-auto w-[90%] md:w-full">
          <div className="border-8 rounded-md border-brand w-[90%] h-[90%] lg:w-[411px] lg:h-[396px]">
            <img
              src="/IMG-20250309-WA0003.jpg"
              alt="Principal Desk"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:max-w-2xl">
            <p className="text-[18px] md:text-[25px] text-black">
              At Holy Cross, foster a dynamic learning environment where every
              child&apos;s potential is nurtured. Our innovative curriculum, led
              by passionate educators, encourages curiosity, critical thinking,
              and collaboration. We focus on both academic and personal growth,
              developing students into compassionate, confident, and skilled
              individuals. Through enriching programs and supportive guidance,
              we prepare our students to tackle future challenges with
              creativity, resilience, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 w-full md:max-w-7xl mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <div className="w-[40px] h-[4px] mb-[0.25rem] gradient-bar" />
            <h2 className="h2 text-primaryBlue-600">Gallery</h2>
          </div>

          <div className="bg-brand p-2 rounded-full">
            <Link to="/gallery">
              <Eye size={24} color="#FFF" />
            </Link>
          </div>
        </div>

        <ImageSlider />
      </section>

      {/* Why choose us */}
      <div className="sm:px-16 px-6 sm:py-16 py-10 w-full md:max-w-7xl mx-auto text-center">
        <h2 className="h2 text-brand-100">Why Choose Us?</h2>

        <p className="text-black text-[17px] md:text-[22px] leading-[30px]">
          At <span className="text-brand font-medium">Holy Cross</span>, we
          provide a nurturing environment and comprehensive facilities that
          empower students to excel both academically and personally. Our
          holistic approach prepares students to navigate life’s challenges with
          confidence, compassion, and resilience.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
