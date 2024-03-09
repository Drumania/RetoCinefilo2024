import { useParams } from "react-router-dom";

import data from "../data/data.json";

import logo_hbo from "../assets/img/logo_hbo.png";
import logo_netflix from "../assets/img/logo_netflix.png";
import logo_prime from "../assets/img/logo_prime.png";
import logo_star from "../assets/img/logo_star.png";

import Footer from "./Footer";
import BtnBack from "./btnBack";
import MoviePoster from "./MoviePoster";

const Month = () => {
  // Utiliza el hook useParams para acceder a los parámetros de la URL
  const { month } = useParams();
  const monthData = data[month.toLowerCase()]; // Asegúrate de que el nombre del mes esté en minúsculas en tu JSON

  if (!monthData) {
    return <div>Mes no encontrado</div>;
  }

  const {
    title,
    description,
    movies,
    tips,
    outsideCinema,
    streamingPlatforms,
    smuggling,
    smuggling_legend,
    movie_quote,
    movie_name,
  } = monthData;

  return (
    <div>
      <div className="content-interna">
        <header className={month}>
          <div className="wrap-content ci-title">
            <div className="wrap-titles">
              <h3>{month}</h3>
              <h2>{title}</h2>
            </div>
          </div>
        </header>

        <div className="wrap-content wrap-description">
          <p>{description}</p>
        </div>

        <section className="bl-bk">
          <div className="wrap-content">
            <h3>PELÍCULAS</h3>

            <div className="wrap-movie-poster">
              {movies.map((item, index) => (
                <>
                  <MoviePoster
                    key={index}
                    title_es={item.title_es}
                    title_en={item.title_en}
                    director={item.director}
                    description={item.description}
                    picture={item.picture}
                  />
                </>
              ))}
            </div>
          </div>
        </section>

        <section className="tips">
          <div className="wrap-content">
            <h3>TIPS PARA EL GÉNERO</h3>

            <div className="wrap-flex">
              {tips.map((tip, index) => (
                <div key={index}>
                  <img src={tip.icon} alt={tip.title} />
                  <h4>{tip.title}</h4>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>

            <hr />

            <h3>FUERA DEL CINE</h3>

            <div className="wrap-flex">
              {outsideCinema.map((item, index) => (
                <div key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wh-bk plataformas">
          <div className="wrap-content">
            <h3>EN LAS PLATAFORMAS</h3>
            <div className="wrap-flex">
              <div>
                <img src={logo_netflix} alt="netflix" />
                <h4>Netflix</h4>
                <ul className="movies-list">
                  {streamingPlatforms.netflix &&
                    streamingPlatforms.netflix.map((item, index) => (
                      <li key={index}>
                        {item.title_es}
                        <br />
                        {item.title_en}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <img src={logo_hbo} alt="hbo" />
                <h4>HBO max</h4>
                <ul className="movies-list">
                  {streamingPlatforms.hbo &&
                    streamingPlatforms.hbo.map((item, index) => (
                      <li key={index}>
                        {item.title_es}
                        <br />
                        {item.title_en}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <img src={logo_prime} alt="amazon prime video" />
                <h4>Amazon Prime</h4>
                <ul className="movies-list">
                  {streamingPlatforms.prime &&
                    streamingPlatforms.prime.map((item, index) => (
                      <li key={index}>
                        {item.title_es}
                        <br />
                        {item.title_en}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <img src={logo_star} alt="star plus" />
                <h4>STAR +</h4>
                <ul className="movies-list">
                  {streamingPlatforms.star &&
                    streamingPlatforms.star.map((item, index) => (
                      <li key={index}>
                        {item.title_es}
                        <br />
                        {item.title_en}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap-content">
            <h3>DE CONTRABANDO</h3>
            <ul className="movies-container">
              {smuggling.map((item, index) => (
                <li key={index}>
                  {item.title_es}
                  <br />
                  {item.title_en}
                </li>
              ))}
            </ul>

            <p>{smuggling_legend}</p>
            <p>
              <i>"{movie_quote}"</i>
              <span className="non-last-span">{movie_name}</span>
            </p>
          </div>
        </section>

        <span className="last-span">CARPE DIEM!</span>

        <BtnBack />
        <Footer />
      </div>
    </div>
  );
};

export default Month;
