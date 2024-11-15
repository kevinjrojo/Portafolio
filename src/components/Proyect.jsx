import "../styles/proyect.css";
import "../styles/proyectMovil.css";

export const Proyect = ({ Title, Description, Image, Link }) => {
  //  const proyectImage = `../assets/proyects${Image}`;

  return (
    <div className="target-project">
      <div className="card-proyect">
        <h3 className="tilte-proyect">{Title}</h3>
        <div className="card__content-proyect">
          <p className="card__title-proyect">{Title}</p>
          <p className="card__description-proyect">{Description}</p>
          <a href={Link} target="_blank" rel="noopener noreferrer">
            ir a app
            <link rel="stylesheet" href="" />
          </a>
        </div>
      </div>
    </div>
  );
};
