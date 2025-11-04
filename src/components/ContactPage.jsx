import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, fadeInUp, staggerContainer } from "../utils/motion";
// Uncomment these if you have react-icons installed
// import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  // --- WhatsApp Details ---
  const whatsappNumber = "916235362320"; // ✅ Correct format (no + or spaces)
  const whatsappMessage =
    "Hello! I saw your website and I'd like to book an appointment.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.div
      className="contact-page section-padding"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageAnimation}
    >
      <motion.div
        className="container text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          The fastest way to get in touch is via WhatsApp. We're here to help!
        </p>
      </motion.div>

      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="contact-content">
          {/* --- Left Column: WhatsApp Booking --- */}
          <motion.div variants={fadeInUp} className="contact-action-container">
            <h3>Book an Appointment</h3>
            <p>
              Click the button below to start a chat with us on WhatsApp for
              bookings and inquiries.
            </p>

            <a
              href={whatsappUrl}
              className="btn btn-whatsapp btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaWhatsapp /> */}
              Book via WhatsApp
            </a>
          </motion.div>

          {/* --- Right Column: Contact Details --- */}
          <motion.div variants={fadeInUp} className="contact-details-container">
            <div className="contact-detail-item">
              {/* <FaMapMarkerAlt className="contact-icon" /> */}
              <div>
                <h4>Address</h4>
                <p>School Junction, Erumad, Tamil Nadu 643239</p>
              </div>
            </div>

            <div className="contact-detail-item">
              {/* <FaClock className="contact-icon" /> */}
              <div>
                <h4>Working Hours</h4>
                <p>Tue – Sun: 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="contact-detail-item">
              {/* <FaPhone className="contact-icon" /> */}
              <div>
                <h4>Phone</h4>
                <p>+91 62353 62320</p>
              </div>
            </div>

            <div className="contact-detail-item">
              {/* <FaEnvelope className="contact-icon" /> */}
              <div>
                <h4>Email</h4>
                <p>contact@releva.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
