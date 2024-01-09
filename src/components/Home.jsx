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
        <div className="preload-image">
          <link rel="preload" as="image" href="/1.gif" />
          <link rel="preload" as="image" href="/2.gif" />
          <link rel="preload" as="image" href="/3.gif" />
          <link rel="preload" as="image" href="/4.gif" />
          <link rel="preload" as="image" href="/5.gif" />
          <link rel="preload" as="image" href="/6.gif" />
          <link rel="preload" as="image" href="/7.gif" />
          <link rel="preload" as="image" href="/8.gif" />
          <link rel="preload" as="image" href="/9.gif" />
          <link rel="preload" as="image" href="/10.gif" />
          <link rel="preload" as="image" href="/11.gif" />
          <link rel="preload" as="image" href="/12.gif" />
        </div>
      </div>
    </>
  );
};

export default Home;
