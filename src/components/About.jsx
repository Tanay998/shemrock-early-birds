// src/pages/About.jsx

import React from "react";

function About() {
  return (
    <section className="about-page py-5">
      <div className="container">

        {/* PAGE TITLE */}
        <div className="text-center mb-5">
          <h1 className="about-title">
            About Us
          </h1>

          <p className="about-subtitle">
            Welcome to Shemrock Early Birds Ramnagar
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-lg-6 mb-4">
            <img
              src="assets/images/student.jpg"
              alt="Shemrock Early Birds Ramnagar"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* TEXT */}
          <div className="col-lg-6">

            <h2 className="mb-3">
              Nurturing Young Minds with Love & Care
            </h2>

            <p>
              <strong>Shemrock Early Birds Ramnagar</strong> is committed
              to providing a joyful, safe, and stimulating learning
              environment where children can explore, learn,
              and grow with confidence.
            </p>

            <p>
              Located at{" "}
              <strong>
                Naya Gaon Chauhaan, Near Northern Plywood,
                Kashipur Road, Ramnagar, District Nainital,
                State Uttarakhand
              </strong>,
              our preschool focuses on activity-based education
              that encourages creativity, communication skills,
              and overall personality development.
            </p>

            <p>
              We believe that every child is unique and deserves
              individual attention. Our experienced teachers use
              modern teaching methods, interactive activities,
              and playful learning techniques to make education
              enjoyable and meaningful.
            </p>

            <p>
              At Shemrock Early Birds, we aim to build a strong
              foundation for lifelong learning while nurturing
              values, confidence, curiosity, and social skills
              in every child.
            </p>

          </div>
        </div>

        {/* OUR MISSION */}
        <div className="mission-section mt-5 p-4 rounded">

          <h2 className="text-center mb-4">
            Our Mission
          </h2>

          <p className="text-center">
            To create a happy and engaging environment where
            children develop intellectually, emotionally,
            socially, and physically through innovative
            and child-friendly learning experiences.
          </p>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-5">

          <h2 className="text-center mb-5">
            Why Choose Us
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="about-card text-center p-4 h-100">

                <h4>
                  Experienced Teachers
                </h4>

                <p>
                  Dedicated and caring educators focused on
                  every child's growth.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card text-center p-4 h-100">

                <h4>
                  Activity-Based Learning
                </h4>

                <p>
                  Interactive teaching methods that make
                  learning fun and effective.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card text-center p-4 h-100">

                <h4>
                  Safe Environment
                </h4>

                <p>
                  Secure and child-friendly campus designed
                  for joyful learning.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;