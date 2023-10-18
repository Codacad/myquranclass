import React from "react";
import "../css/About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <h1>
          About <span className="school">My Quran Class</span>
        </h1>
        <h3>Assalamu Alaikum wa Rahmatullahi wa Barakatuhu,</h3>
        <div className="welcome">          
          <p>
            Welcome to <span className="school">My Quran Class</span>, a
            nurturing sanctuary of knowledge, faith, and community. I am Mohd
            Mohsin, the founder, teacher, and director of this esteemed
            institution. It brings me immense joy to share the story and vision
            behind this sacred space of learning.
          </p>
        </div>
        <div className="journey">
          <h2>My Journey:</h2>
          <p>
            My own journey in the pursuit of Islamic knowledge began with a deep
            curiosity and a thirst for spiritual understanding. Over the years,
            guided by the grace of Allah, I have had the privilege of studying
            under esteemed scholars and teachers. These experiences not only
            enriched my understanding of Islam but also ignited a passion within
            me to share this divine wisdom with others.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision:</h2>
          <p>
            At <span className="school">My Quran Class</span>, our vision is to
            create a vibrant educational environment rooted in the teachings of
            Islam. We believe that education is not just a transfer of knowledge
            but a transformation of the soul. Our aim is to nurture individuals
            who are not only well-versed in the intricacies of Islamic theology
            but also embody the values of compassion, integrity, and service.
          </p>
        </div>
        <div className="approach">
          <h2>Our Approach:</h2>
          <p>
            Our approach to education is holistic. We blend traditional Islamic
            teachings with modern pedagogical methods, fostering an atmosphere
            where critical thinking, spiritual growth, and cultural appreciation
            thrive. Through interactive classes, deep discussions, and community
            engagement, we endeavor to create well-rounded individuals who can
            navigate the complexities of the world with grace and wisdom.
          </p>
        </div>
        <div className="why-choose">
          <h2>
            Why Choose <span className="school">My Quran class</span>? Expert{" "}
          </h2>
          <div className="choose">
            <h5>Guidance:</h5>
            <p>
              Our courses are crafted and taught by experienced educators and
              scholars who are deeply rooted in Islamic traditions.
            </p>
          </div>
          <div className="choose">
            <h5> Spiritual Enrichment:</h5>{" "}
            <p>
              Beyond academic learning, we provide opportunities for spiritual
              reflection, prayer, and mindfulness, helping our students
              strengthen their connection with Allah.{" "}
            </p>
          </div>
          <div className="choose">
            <h5>Inclusive Community:</h5>{" "}
            <p>
              We welcome students from all backgrounds and walks of life. Our
              diverse community enriches the learning experience, fostering
              understanding and unity among our students.{" "}
            </p>
          </div>
          <div className="choose">
            <h5>Lifetime Learning:</h5>{" "}
            <p>
              Our commitment to your education extends beyond the classroom. We
              encourage a lifelong love for learning and provide resources to
              support your continuous spiritual and intellectual growth.
            </p>
          </div>
        </div>
        <div className="join">
          <p>
            Join us in this enriching journey of knowledge and faith. Whether
            you are a beginner seeking foundational understanding or a seasoned
            learner eager to deepen your insights, My Quran Class is your home
            for transformative education.
          </p>
        </div>
        <div className="thank">
          <p>
            Thank you for considering us as your educational partner. I look
            forward to personally welcoming you to our community.
          </p>

          <span>Fi Amanillah (In Allah's Protection),</span>
        </div>
        <div className="profile">
          <h4>Mohd Mohsin</h4>
          <span>Founder, Teacher, and Manager,</span>
          <h5>My Quran Class</h5>
        </div>
      </div>
    </>
  );
};

export default About;
