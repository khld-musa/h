import "./About.css";
import Me from '../../img/me.png'
const About = () => {
  return (
    <div id="about" className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            className="a-img"
            src={Me}
            alt=""
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I develop services for customers in all sizes, specializing in creating stylish, modern websites.
        </p>
        <p className="a-desc">
        React JS developer with more than 2 years of experience with MERN stack development. Possess in-depth knowledge of UI designs using complex concepts in enhancing users’ experience and website performance.
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Electronics Engineering</h4>
            <p className="a-award-desc">
            Graduated from Sudan University of Science and Technology, College of Engineering, School of Electronic Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
