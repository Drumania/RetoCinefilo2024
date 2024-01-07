import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import icoMenu1 from "../assets/img/1.png";
import icoMenu2 from "../assets/img/2.png";
import icoMenu3 from "../assets/img/3.png";
import icoMenu4 from "../assets/img/4.png";
import icoMenu5 from "../assets/img/5.png";
import icoMenu6 from "../assets/img/6.png";
import icoMenu7 from "../assets/img/7.png";
import icoMenu8 from "../assets/img/8.png";
import icoMenu9 from "../assets/img/9.png";
import icoMenu10 from "../assets/img/10.png";
import icoMenu11 from "../assets/img/11.png";
import icoMenu12 from "../assets/img/12.png";

const NavInterna = ({ month }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${month} ${
          isSticky ? "nav-month sticky-nav" : "nav-month"
        }`}
      >
        <a
          href="/enero"
          className={month === "enero" ? "active" : ""}
          title="Enero"
        >
          &nbsp;
        </a>
        <a
          href="/febrero"
          className={month === "febrero" ? "active" : ""}
          title="Febrero"
        >
          &nbsp;
        </a>
        <a
          href="/marzo"
          className={month === "marzo" ? "active" : ""}
          title="Marzo"
        >
          &nbsp;
        </a>
        <a
          href="/abril"
          className={month === "abril" ? "active" : ""}
          title="Abril"
        >
          &nbsp;
        </a>

        <a
          href="/mayo"
          className={month === "mayo" ? "active" : ""}
          title="Mayo"
        >
          &nbsp;
        </a>
        <a
          href="/junio"
          className={month === "junio" ? "active" : ""}
          title="Junio"
        >
          &nbsp;
        </a>
        <a
          href="/julio"
          className={month === "julio" ? "active" : ""}
          title="Julio"
        >
          &nbsp;
        </a>
        <a
          href="/agosto"
          className={month === "agosto" ? "active" : ""}
          title="Agosto"
        >
          &nbsp;
        </a>

        <a
          href="/septiembre"
          className={month === "septiembre" ? "active" : ""}
          title="Septiembre"
        >
          &nbsp;
        </a>
        <a
          href="/octubre"
          className={month === "octubre" ? "active" : ""}
          title="Octubre"
        >
          &nbsp;
        </a>
        <a
          href="/noviembre"
          className={month === "noviembre" ? "active" : ""}
          title="Noviembre"
        >
          &nbsp;
        </a>
        <a
          href="/diciembre"
          className={month === "diciembre" ? "active" : ""}
          title="Diciembre"
        >
          &nbsp;
        </a>
      </nav>

      <header className={month}>&nbsp;</header>
    </>
  );
};

export default NavInterna;
