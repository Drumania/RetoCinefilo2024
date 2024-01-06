import { useParams, Link } from "react-router-dom";

import data from "../data/data.json";

import icono_musica from "../assets/img/icono_musica.svg";
import icono_investigando from "../assets/img/icono_investigando.svg";
import icono_llorando from "../assets/img/icono_llorando.svg";
import icono_pensando from "../assets/img/icono_pensando.svg";

import logo_hbo from "../assets/img/logo_hbo.png";
import logo_netflix from "../assets/img/logo_netflix.png";
import logo_prime from "../assets/img/logo_prime.png";
import logo_star from "../assets/img/logo_star.png";

import NavInterna from "./NavInterna";
import Footer from "./Footer";

const Month = () => {
  // Utiliza el hook useParams para acceder a los parámetros de la URL
  const { month } = useParams();
  const {
    comingOfAge,
    movies,
    tips,
    platforms,
    contraband,
    // Otros campos según la estructura del JSON
  } = data;

  return (
    <div>
      <Link to="/">volver</Link>

      <div className="content-interna">
        <NavInterna month={month} />

        <section className="ci-title">
          <div className="wrap-content">
            <h2>Coming of Age</h2>

            <p>
              Son como ese repaso por la adolescencia que todos necesitamos. O
              sea, te tiran de lleno al quilombo de los primeros amores, las
              amistades que marcan época y la sensación de no tener ni idea de
              qué estás haciendo, pero con onda. Imaginate: es como el tutorial
              para pasar de ser un pibe medio perdido a codearte con el mundo
              adulto. Entonces, si alguna vez te preguntaste qué onda cuando los
              protagonistas de las películas dejan de ser unos giles y empiezan
              a bancársela en serio, prepárate para un viaje lleno de momentos
              épicos y autodescubrimiento.
            </p>
          </div>
        </section>

        <section className="bl-bk">
          <div className="wrap-content">
            <h3>PELÍCULAS</h3>
            The Breakfast Club Dirigida por John Hughes, sigue a un grupo de
            estudiantes de secundaria que se encuentran durante un castigo y
            descubren que tienen más en común de lo que pensaban. LEER +
          </div>
        </section>

        <section className="tips">
          <div className="wrap-content">
            <h3>TIPS PARA EL GÉNERO</h3>

            <div className="wrap-flex">
              <div>
                <img src={icono_musica} alt="icono_musica" />
                <h4>Escuchá</h4>
                No subestimes la banda sonora. A veces es mejor que la historia
                misma.
              </div>
              <div>
                <img src={icono_pensando} alt="icono_pensando" />
                <h4>Pensá</h4>
                Después de verla, date un tiempo para digerirla. Estas pelis
                suelen dejar algo para pensar.
              </div>
              <div>
                <img src={icono_investigando} alt="icono_investigando" />
                <h4>Investigá</h4>
                Si te gusta una, rastreá otras del mismo director o con la misma
                gente. Puede ser un viaje.
              </div>
              <div>
                <img src={icono_llorando} alt="icono_llorando" />
                <h4>Llorate todo</h4>
                Algunas te parten el corazón. No pasa nada si tirás un par de
                lágrimas.
              </div>
            </div>

            <hr />

            <h3>FUERA DEL CINE</h3>

            <div className="wrap-flex">
              <div>
                <h4>En el Animé</h4>
                El género "coming of age" es muy popular en el anime japonés.
                Obras como "A Silent Voice", “Kiki's Delivery Service” y "Your
                Name" exploran temas de crecimiento personal y descubrimiento.
              </div>
              <div>
                <h4>En la literatura</h4>
                Muchas obras de la literatura clásica también encajan en el
                género. "To Kill a Mockingbird" y "Catcher in the Rye" son
                ejemplos destacados.
              </div>
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
                  <li>
                    Las ventajas de ser invisible
                    <br />
                    (The Perks of Being a Wallflower)
                  </li>
                  <li>
                    Cuenta conmigo
                    <br />
                    (Stand by Me)
                  </li>
                  <li>
                    Mi primer beso
                    <br />
                    (My first Kiss)
                  </li>
                </ul>
              </div>
              <div>
                <img src={logo_hbo} alt="hbo" />
                <h4>HBO max</h4>
                <ul className="movies-list">
                  <li>
                    Se dice de mí
                    <br />
                    (Easy A)
                  </li>
                  <li>
                    Súper Cool
                    <br />
                    (Superbad)
                  </li>
                  <li>
                    ¿Estás ahí, Dios? Soy Yo, Margaret
                    <br />
                    (Are You There God? It’s Me, Margaret)
                  </li>
                </ul>
              </div>
              <div>
                <img src={logo_prime} alt="amazon prime video" />
                <h4>Amazon Prime</h4>
                <ul className="movies-list">
                  <li>
                    Lady Bird
                    <br /> (Lady Bird)
                  </li>
                  <li>
                    Juno
                    <br /> (Juno)
                  </li>
                  <li>
                    Sí, Dios mío, sí
                    <br /> (Yes, God, yes)
                  </li>
                </ul>
              </div>
              <div>
                <img src={logo_star} alt="star plus" />
                <h4>STAR +</h4>
                <ul className="movies-list">
                  <li>
                    Yo, él y Raquel
                    <br />
                    (Me & Earl & the Dying Girl)
                  </li>
                  <li>
                    Tres son multitud
                    <br />
                    (Rushmore)
                  </li>
                  <li>
                    La Sociedad de los Poetas Muertos
                    <br />
                    (Dead Poets Society)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap-content">
            <h3>DE CONTRABANDO</h3>
            <ul className="movies-container">
              <li>
                El club de los cinco
                <br />
                (The Breakfast Club)
              </li>
              <li>
                Persépolis
                <br />
                (Persepolis)
              </li>
              <li>
                Casi famosos
                <br />
                (Almost Famous)
              </li>
              <li>
                Sirenas
                <br />
                (Mermaids)
              </li>
              <li>
                La noche de las nerds
                <br />
                (Booksmart)
              </li>
              <li>
                Momentos De Una Vida
                <br />
                (Boyhood Un reino bajo la luna (Moonrise Kingdom)
              </li>
              <li>
                Rebeldes y confundidos
                <br />
                (Dazed And Confused)
              </li>
            </ul>

            <p>
              Desde risas contagiosas hasta momentos que te llegan al corazón,
              estas películas son una invitación a recordar, reflexionar y,
              sobre todo, disfrutar del curioso trayecto que es crecer. Mandale
              nomás a las recomendaciones y preparate para completar posibles
              huequitos argumentales que quedaron atrás.
            </p>
            <p>
              <i>
                "Me paro sobre mi escritorio para recordarme a mí mismo que
                constantemente debemos mirar las cosas de una manera diferente."
              </i>
              <span className="non-last-span">
                La Sociedad de los Poetas Muertos (1989)
              </span>
            </p>
          </div>
        </section>

        <span className="last-span">CARPE DIEM!</span>

        <Footer />
      </div>
    </div>
  );
};

export default Month;
