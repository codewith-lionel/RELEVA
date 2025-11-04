import React from "react";
import { motion } from "framer-motion";
// Uncomment if using icons
// import { FaRunning, FaUserNurse, FaHeartbeat, FaBrain, FaFemale } from "react-icons/fa";

const services = [
  {
    title: "Back & Neck Pain Relief",
    description:
      "Specialized treatments to alleviate chronic and acute pain in the back and neck regions.",
    // icon: <FaHeartbeat />,
  },
  {
    title: "Sports & ACL Rehabilitation",
    description:
      "Customized programs to help athletes recover from injuries and regain peak performance.",
    // icon: <FaRunning />,
  },
  {
    title: "Post-Operative Therapy",
    description:
      "Specialized therapy to restore mobility and strength after surgical procedures.",
    // icon: <FaUserNurse />,
  },
  {
    title: "Neurological Physiotherapy",
    description:
      "Targeted physiotherapy for conditions affecting the nervous system, improving function.",
    // icon: <FaBrain />,
  },
  {
    title: "Women's Health Physiotherapy",
    description:
      "Dedicated care for conditions unique to women through all stages of life.",
    // icon: <FaFemale />,
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
          Our mission is to provide personalized care that empowers you on your
          journey to recovery and peak physical well-being.
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
              <div className="service-icon">{/* {service.icon} */}</div>
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
