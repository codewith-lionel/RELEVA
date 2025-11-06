import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaUserNurse,
  FaHeartbeat,
  FaBrain,
  FaChild,
  FaFemale,
} from "react-icons/fa";

const services = [
  {
    title: "Pain Management & Functional Restoration",
    description:
      "Comprehensive pain management programs focusing on restoring movement and improving quality of life.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Musculoskeletal Pain Management",
    description:
      "Expert care for neck pain, shoulder pain, ankle pain, knee pain, and low back pain.",
    icon: <FaRunning />,
  },
  {
    title: "Osteoarthritis & Degenerative Disorders",
    description:
      "Specialized physiotherapy for osteoarthritis and other degenerative musculoskeletal conditions.",
    icon: <FaUserNurse />,
  },
  {
    title: "Neurological Rehabilitation",
    description:
      "Focused therapy for stroke, spinal cord injuries, parkinsonism, and other movement disorders to improve mobility and function.",
    icon: <FaBrain />,
  },
  {
    title: "Paediatric Physiotherapy",
    description:
      "Customized programs for children with cerebral palsy, autism, torticollis, and developmental delays.",
    icon: <FaChild />,
  },
  {
    title: "Women’s Health Physiotherapy",
    description:
      "Specialized care for pelvic floor rehabilitation, antenatal and postnatal exercise programs, and overall wellness for women.",
    icon: <FaFemale />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesPage = () => {
  return (
    <motion.div
      className="services-page section-padding text-center"
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comprehensive Physiotherapy Treatments
        </motion.h1>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We provide evidence-based physiotherapy treatments designed to relieve
          pain, restore function, and improve your overall well-being.
        </motion.p>

        <div className="services-grid-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-large"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="service-icon text-primary text-4xl flex justify-center">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
