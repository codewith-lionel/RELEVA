import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, pageAnimation } from "../utils/motion";
import ancy from "../assets/ancy.jpg";
import "../HomePage.css";

const HomePage = () => {
  return (
    <motion.div
      className="homepage modern-layout"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageAnimation}
    >
      {/* --- HERO SECTION --- */}
      <section className="hero teal-theme">
        <div className="overlay"></div>
        <div className="hero-content">
          <motion.h1 variants={fadeInUp}>Releva Physiotherapy Clinic</motion.h1>
          <motion.p variants={fadeInUp}>Relieve. Restore. Rebuild.</motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="btn-modern">
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <motion.section
        className="welcome"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="welcome-grid">
          <motion.div variants={fadeInUp} className="welcome-img">
            <img
              src={ancy}
              alt="Dr. Ancy Anto"
              className="expert-img"
              style={{
                width: "auto",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="welcome-text">
            <h2>Welcome from Dr. Ancy Anto</h2>
            <p>
              Dr. Ancy Anto is dedicated to personalized physiotherapy,
              combining evidence-based treatment and compassionate care for
              long-term recovery and wellness.
            </p>
            <p>
              At Releva, our hands-on, holistic approach ensures that every
              treatment plan is tailored for your unique journey toward healing.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* --- SERVICES SECTION --- */}
      <motion.section
        className="services-modern"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeInUp}>Our Core Services</motion.h2>
        <motion.p variants={fadeInUp}>
          Specialized treatments designed to bring you back to motion.
        </motion.p>

        <div className="fluid-cards">
          <motion.div variants={fadeInUp} className="fluid-card">
            <h3>Back Pain Therapy</h3>
            <p>
              Targeted treatments for spinal alignment, muscle relaxation, and
              posture correction to relieve chronic back pain.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="fluid-card">
            <h3>ACL & Sports Injury Rehab</h3>
            <p>
              Restoring power, stability, and flexibility through custom
              rehabilitation after ACL or sports-related injuries.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="fluid-card">
            <h3>Post-Surgery Recovery</h3>
            <p>
              Expert-guided therapy to accelerate healing and rebuild strength
              following surgical procedures.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
