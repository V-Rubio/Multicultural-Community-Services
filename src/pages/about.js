import "../styles/overall.css";

const About = function () {
  return (
    <>
      <div className="outsideDiv">
        <h1 >Who We Are</h1>
        <h6 >
          A 501 (c) 3 private nonprofit agency in New Jersey. It was founded in
          2001 by a group of seasoned professionals. MCS uses evidenced based
          best practices in all programs to assist families, children, youth,
          and young adults.{" "}
        </h6>
        <h1 >Our Approach</h1>
        <h6 >Promotive Protective Factors</h6>
        <ul className="ulCircle">
          <li>Nurturing and Attachment </li>
          <br />
          <li>Knowledge of Parenting and of Child and Youth Development</li>
          <br />
          <li>Parental Resilience</li>
          <br />
          <li>Social Connections </li>
          <br />
          <li>Concrete Supports for Parents</li>
          <br />
          <li>Social and Emotional Competence of Children</li>
          <br />
        </ul>
      </div>
    </>
  );
};

export default About;
