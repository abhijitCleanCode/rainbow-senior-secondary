import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Rainbow Sr Secondary School - Contact Us";
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill all required fields.",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message. We will get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactItems = [
    {
      icon: <MapPin size={24} className="text-brand" />,
      title: "Our Location",
      details: ["Jamira", "Part-III", "Hailakandi"],
    },
    {
      icon: <Phone size={24} className="text-brand" />,
      title: "Call Us",
      details: ["6901522862", "8822031202"],
    },
    {
      icon: <Mail size={24} className="text-brand" />,
      title: "Email Us",
      details: ["schoolemail@gmail.com"],
    },
    {
      icon: <Clock size={24} className="text-brand" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 8:00 AM - 3:00 PM",
        "Saturday: 8:00 AM - 12:00 PM",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Banner */}
      <div className="bg-brand-100 sm:px-16 px-6 sm:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Contact Us
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
              <span>Contact</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-50 sm:px-16 px-6 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Please feel free to contact us for any
              inquiries, feedback, or concerns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <div className="text-gray-600">
                  {item.details.map((detail, i) => (
                    <p key={i} className="mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-12 sm:px-16 px-6 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1  gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              {formStatus.submitted && (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    formStatus.success
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-brand"
                  }`}
                >
                  <div className="flex items-start">
                    {formStatus.success ? (
                      <CheckCircle
                        size={20}
                        className="mr-2 flex-shrink-0 mt-0.5"
                      />
                    ) : (
                      <AlertCircle
                        size={20}
                        className="mr-2 flex-shrink-0 mt-0.5"
                      />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about admissions, academics, and
              school policies.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Add FAQ items here */}
      {/*</motion.div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;
