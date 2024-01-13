import Header from "./Header";
import Monththumb from "./Monththumb";
import BkVideo from "./BkVideo";
import Footer from "./Footer";
import Preloads from "./Preloads";

const Home = () => {
  const monthsData = [
    { name: "enero", legend: "viajes en el tiempo" },
    { name: "febrero", legend: "ROMANCE ATÍPICO" },
    { name: "marzo", legend: "GANADORA AL OSCAR MEJOR PELÍCULA" },
    { name: "abril", legend: "VISUALMENTE IMPACTANTE" },
    { name: "mayo", legend: "CLÁSICO PENDIENTE" },
    { name: "junio", legend: "DRAMA INVERNAL" },
    { name: "julio", legend: "SOBRE LA AMISTAD" },
    { name: "agosto", legend: "DE CULTO" },
    { name: "septiembre", legend: "COMING OF AGE" },
    { name: "octubre", legend: "TERROR PSICOLÓGICO" },
    { name: "noviembre", legend: "ANIMADA (NO DISNEY NI DREAMWORKS)" },
    { name: "diciembre", legend: "SOBRE LA FAMILIA" },
  ];

  const monthThumbs = monthsData.map((month) => (
    <Monththumb key={month.name} name={month.name} legend={month.legend} />
  ));

  return (
    <>
      <BkVideo />
      <div className="content">
        <Header />
        <main>
          <ul className="movie-grid">{monthThumbs}</ul>
        </main>
        <Footer />

        <Preloads />
      </div>
    </>
  );
};

export default Home;
