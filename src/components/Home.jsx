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
            <Monththumb name="enero" legend="viajes en el tiempo" />
            <Monththumb name="febrero" legend="ROMANCE ATÍPICO" />
            <Monththumb
              name="marzo"
              legend="GANADORA AL OSCAR MEJOR PELÍCULA"
            />
            <Monththumb name="abril" legend="VISUALMENTE IMPACTANTE" />
            <Monththumb name="mayo" legend="CLÁSICO PENDIENTE" />
            <Monththumb name="junio" legend="DRAMA INVERNAL" />
            <Monththumb name="julio" legend="SOBRE LA AMISTAD" />
            <Monththumb name="agosto" legend="DE CULTO" />
            <Monththumb name="septiembre" legend="COMING OF AGE" />
            <Monththumb name="octubre" legend="TERROR PSICOLÓGICO" />
            <Monththumb
              name="noviembre"
              legend="ANIMADA (NO DISNEY NI DREAMWORKS)"
            />
            <Monththumb name="diciembre" legend="SOBRE LA FAMILIA" />
          </ul>
        </main>

        <Footer />

        <div className="preload-image">&nbsp;</div>
      </div>
    </>
  );
};

export default Home;
