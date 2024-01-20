import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import Preloads from "./Preloads";

const NavInterna = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { month } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    // Cuando se hace clic en un enlace, desplázate hacia arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Puedes ajustar el comportamiento del desplazamiento
    });
  };

  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const monthLinks = months.map((m) => (
    <Link
      key={m}
      to={`/${m}`}
      className={month === m ? "active" : ""}
      title={m.charAt(0).toUpperCase() + m.slice(1)}
      onClick={handleLinkClick}
    >
      &nbsp;
    </Link>
  ));

  return (
    <>
      <Preloads />
      <div id="progress"></div>
      <nav
        className={`${month} ${
          isSticky ? "nav-month sticky-nav" : "nav-month"
        }`}
      >
        {monthLinks}
      </nav>

      <Outlet />
    </>
  );
};

export default NavInterna;
