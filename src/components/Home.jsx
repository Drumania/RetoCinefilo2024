import Header from "./Header";
import Monththumb from "./Monththumb";
import BkVideo from "./BkVideo";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <BkVideo />

      <div className="content">
        <Header />
        <main>
          <ul className="movie-grid">
            <Monththumb name="Enero" legend="viajes en el tiempo" />
            <Monththumb name="Febrero" legend="ROMANCE ATIPICO" />
            <Monththumb
              name="Marzo"
              legend="GANADORA AL OSCAR MEJOR PELICULA"
            />
            <Monththumb name="Abril" legend="VISUALMENTE IMPACTANTE" />
            <Monththumb name="Mayo" legend="CLÁSICO PENDIENTE" />
            <Monththumb name="Junio" legend="DRAMA INVERNAL" />
            <Monththumb name="Julio" legend="SOBRE LA AMISTAD" />
            <Monththumb name="Agosto" legend="DE CULTO" />
            <Monththumb name="Septiembre" legend="COMING OF AGE" />
            <Monththumb name="Octubre" legend="TERROR PSICOLÓGICO" />
            <Monththumb
              name="Noviembre"
              legend="ANIMADA (NO DISNEY NI DREAMWORKS)"
            />
            <Monththumb name="Diciembre" legend="SOBRE LA FAMILIA" />
          </ul>
        </main>

        <Footer />

        <div className="preload-image">&nbsp;</div>
      </div>
    </>
  );
};

export default Home;
