// Month.jsx

const Month = ({ name, legend }) => {
  return (
    <li>
      <a href={name}>
        <h2>{name}</h2>
        <div className="img-month">&nbsp;</div>
        <span>{legend}</span>
      </a>
    </li>
  );
};

export default Month;
