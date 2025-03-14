import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { Camera, Filter, ChevronDown } from "lucide-react";

// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Holy Cross - Gallery";
  }, []);

  // Gallery categories

  const categories = [
    { id: "all", name: "All" },
    { id: "events", name: "School Events" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural Activities" },
    { id: "academic", name: "Academic Activities" },
  ];

  // Gallery images (placeholder data)

  const galleryImages = [
    { id: 1, src: "/IMG-20250309-WA0003.jpg", category: ["all", "events"] },
    { id: 2, src: "/IMG-20250309-WA0005.jpg", category: ["all", "sports"] },
    { id: 3, src: "/IMG-20250309-WA0006.jpg", category: ["all", "cultural"] },
    { id: 4, src: "/IMG-20250310-WA0005.jpg", category: ["all", "academic"] },
    { id: 6, src: "/IMG-20250310-WA0007.jpg", category: ["all", "events"] },
    { id: 7, src: "/IMG-20250310-WA0008.jpg", category: ["all", "sports"] },
    { id: 8, src: "/IMG-20250310-WA0009.jpg", category: ["all", "cultural"] },
    { id: 9, src: "/IMG-20250310-WA0010.jpg", category: ["all", "academic"] },
    { id: 11, src: "/IMG-20250310-WA0014.jpg", category: ["all", "events"] },
    { id: 12, src: "/IMG-20250310-WA0015.jpg", category: ["all", "sports"] },
    { id: 13, src: "/IMG-20250310-WA0016.jpg", category: ["all", "cultural"] },
    { id: 14, src: "/IMG-20250310-WA0017.jpg", category: ["all", "academic"] },
    { id: 16, src: "/IMG-20250310-WA0019.jpg", category: ["all", "events"] },
    { id: 17, src: "/IMG-20250310-WA0020.jpg", category: ["all", "sports"] },
    { id: 18, src: "/IMG-20250310-WA0021.jpg", category: ["all", "cultural"] },
    { id: 19, src: "/IMG-20250310-WA0022.jpg", category: ["all", "academic"] },
    { id: 21, src: "/IMG-20250310-WA0024.jpg", category: ["all", "events"] },
    { id: 22, src: "/IMG-20250310-WA0025.jpg", category: ["all", "sports"] },
    { id: 23, src: "/IMG-20250310-WA0026.jpg", category: ["all", "cultural"] },
    { id: 24, src: "/IMG-20250310-WA0027.jpg", category: ["all", "academic"] },
    { id: 26, src: "/IMG-20250310-WA0029.jpg", category: ["all", "events"] },
    { id: 27, src: "/IMG-20250310-WA0032.jpg", category: ["all", "sports"] },
    { id: 28, src: "/IMG-20250310-WA0033.jpg", category: ["all", "cultural"] },
    { id: 29, src: "/IMG-20250310-WA0037.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0041.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0042.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0043.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0044.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0046.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0047.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0048.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0049.jpg", category: ["all", "academic"] },
    { id: 29, src: "/IMG-20250310-WA0052.jpg", category: ["all", "academic"] },
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Banner */}
      <div className="bg-brand py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Photo Gallery
            </motion.h1>
            <motion.div
              className="flex items-center justify-center text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">/</span>
              <span>Gallery</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="sm:px-16 px-6 sm:py-16 py-10 w-full md:max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Camera size={24} className="mr-2 text-brand" />
              Photo Gallery
            </h2>

            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <button
                className="flex items-center px-4 py-2 border rounded-md bg-gray-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Filter size={18} className="mr-2" />
                Filter
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Desktop Category Tabs */}
          <div className="hidden md:block">
            <Tab.Group>
              <Tab.List className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      `w-full py-2.5 text-sm font-medium leading-5 rounded-md
                      ${
                        selected
                          ? "bg-brand-100 text-white shadow"
                          : "text-gray-700 hover:bg-gray-200"
                      }`
                    }
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>

          {/* Mobile Category Dropdown */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-2 bg-white shadow-lg rounded-md border overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 text-sm
                    ${
                      activeCategory === category.id
                        ? "bg-red-50 text-red-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={imageVariants}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No images found for this category.
              </p>
            </motion.div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="font-bold text-xl">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.date}</p>
            </div>
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
