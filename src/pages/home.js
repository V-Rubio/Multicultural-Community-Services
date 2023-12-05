import "../styles/overall.css";

const Home = function () {
  return (
    <>
      <div className="outsideDiv">
        <head>
          <title>MCS</title>
        </head>
        <h1 >Family Nurturing Center of New Jersey</h1>
        <h3 >
          Family Nurturing Centers are licensed by Family Development
          International
        </h3>
        <h6 >
          Multicultural Community Services provides competent, bilingual,
          community-based human services and educational programming that
          promotes and improves the quality of life. We believe that diversity
          broadens and enriches our social, cultural, educational and community
          perspectives and deepens our appreciation for all members of society.
          We further believe that all community members have a right to a safe
          and supportive service delivery environment that is free from
          discrimination regardless of race, class, sexual orientation,
          ethnicity, gender, learning differences or nationality.
          <br />
          MCS uses the Nurturing Parenting Programs with all families.
        </h6>

        <h1 >
          Evidence Based Trauma Informed Protective Factors
        </h1>
        <ul className="ulCircle">
          <li>Safety</li>
          <br />
          <li>Trustworthiness and Transparency </li>
          <br />
          <li>Peer Support </li>
          <br />
          <li>Collaboration and Mutuality </li>
          <br />
          <li>Empowerment, Voice, and Choice </li>
          <br />
          <li>Cultural, Historical, and Gender Issues</li>
          <br />
        </ul>
      </div>
    </>
  );
};

export default Home;
