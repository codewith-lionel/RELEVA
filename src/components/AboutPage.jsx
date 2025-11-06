import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, fadeInUp, staggerContainer } from "../utils/motion";
import { Link } from "react-router-dom";
import ancy from "../assets/ancy.jpg"; // ✅ correct import path (make sure image exists in /assets folder)

const AboutPage = () => {
  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageAnimation}
    >
      {/* ---------- Expert Section ---------- */}
      <motion.section
        className="about-expert-section section-padding text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h1 variants={fadeInUp} className="section-title">
            Meet Our Expert Physiotherapist
          </motion.h1>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Dedicated to your recovery and well-being with personalized care.
          </motion.p>

          <motion.div variants={fadeInUp} className="expert-card">
            <div className="flex-container">
              {/* Left - Image */}
              <div className="flex-item-40">
                <div className="img-placeholder" style={{ height: "350px" }}>
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
                </div>
              </div>

              {/* Right - Info */}
              <div className="flex-item-60 text-left">
                <h3>Dr. Ancy Anto</h3>
                <h4>Lead Physiotherapist</h4>
                <p>
                  Dr. Ancy Anto is a lead physiotherapist with over 3 years of
                  experience in musculoskeletal and sports rehabilitation. She
                  provides evidence-based, patient-centered care to help you
                  achieve your recovery goals.
                </p>

                <h5>Qualifications & Certifications</h5>
                <ul>
                  <li>BPT</li>
                  <li>CDNT</li>
                  <li>CAFPCT</li>
                  <li>CIASTMT</li>
                </ul>

                <Link to="/services" className="btn btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------- Mission & Vision ---------- */}
      <motion.section
        className="mission-vision-section section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="flex-container">
            <motion.div variants={fadeInUp} className="flex-item-50 card">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional, patient-focused physiotherapy through
                personalized treatment plans that empower our clients to regain
                function, reduce pain, and enhance their quality of life.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-item-50 card">
              <h3>Our Vision</h3>
              <p>
                To be the leading physiotherapy clinic in the community,
                recognized for our commitment to clinical excellence,
                innovation, and a compassionate approach to patient care.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ---------- Clinic Environment ---------- */}
      {/* ---------- Our Approach Section ---------- */}
      <motion.section
        className="approach-section section-padding text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container">
          <h2 className="section-title">Our Approach to Healing</h2>
          <p className="section-subtitle">
            A science-driven and heart-centered approach for long-term recovery.
          </p>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Personalized Assessment</h3>
              <p>
                Every patient begins with a detailed evaluation to understand
                their unique condition, goals, and lifestyle.
              </p>
            </div>
            <div className="approach-card">
              <h3>Evidence-Based Therapy</h3>
              <p>
                We use clinically proven techniques and advanced physiotherapy
                modalities to deliver effective and safe results.
              </p>
            </div>
            <div className="approach-card">
              <h3>Holistic Recovery</h3>
              <p>
                Healing is more than pain relief — we focus on restoring
                strength, movement, and confidence for lasting wellness.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
