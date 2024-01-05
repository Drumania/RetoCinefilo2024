import Header from "./Header";
import Month from "./Month";
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
            <Month name="Enero" legend="viajes en el tiempo" />
            <Month name="Febrero" legend="ROMANCE ATIPICO" />
            <Month name="Marzo" legend="GANADORA AL OSCAR MEJOR PELICULA" />
            <Month name="Abril" legend="VISUALMENTE IMPACTANTE" />
            <Month name="Mayo" legend="CLÁSICO PENDIENTE" />
            <Month name="Junio" legend="DRAMA INVERNAL" />
            <Month name="Julio" legend="SOBRE LA AMISTAD" />
            <Month name="Agosto" legend="DE CULTO" />
            <Month name="Septiembre" legend="COMING OF AGE" />
            <Month name="Octubre" legend="TERROR PSICOLÓGICO" />
            <Month
              name="Noviembre"
              legend="ANIMADA (NO DISNEY NI DREAMWORKS)"
            />
            <Month name="Diciembre" legend="SOBRE LA FAMILIA" />
          </ul>
        </main>

        <Footer />

        <div className="preload-image">&nbsp;</div>
      </div>
    </>
  );
};

export default Home;
