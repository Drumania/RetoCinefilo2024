import Header from "./Header";
import Monththumb from "./Monththumb";
import BkVideo from "./BkVideo";
import Footer from "./Footer";

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

        <div className="preload-backgrounds">
          <div className="bg1"></div>
          <div className="bg2"></div>
          <div className="bg3"></div>
          <div className="bg4"></div>

          <div className="bg5"></div>
          <div className="bg6"></div>
          <div className="bg7"></div>
          <div className="bg8"></div>

          <div className="bg9"></div>
          <div className="bg10"></div>
          <div className="bg11"></div>
          <div className="bg12"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
