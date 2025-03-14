import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🛠️ Under Maintenance
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            We're currently working on improving this feature.
          </p>
          <p className="text-gray-500">
            Please check back later. Thank you for your patience!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnderMaintenance;
