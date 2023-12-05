import "../styles/overall.css";

const Families = function () {
  return (
    <>
      <div className="outsideDiv">
        <h1>Family Programs</h1>
        <p>2001</p>
        <p>
          All MCS Family Programs use the evidence-based Nurturing Parenting
          Programs for all families since 2001. Link to Nurturing Parenting.
        </p>
        <p> 2009</p>
        <p>
          In 2009 , MCS became the Family Nurturing Center of New Jersey. Read
          more about Family Nurturing Centers.
        </p>

        <h3>We Offer </h3>
        <ul className="ulCircle">
          <li>Teen Parent Support </li><br/>
          <li>Young Parent Support </li><br/>
          <li>Parent Support </li><br/>
          <li>Family Support </li><br/>
          <li>Family Reunification </li><br/>
        </ul>
      </div>
    </>
  );
};

export default Families;
