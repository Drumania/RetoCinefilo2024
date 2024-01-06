import React from "react";

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
  return (
    <header className={month}>
      <div className="wrap-content">
        <nav className="nav-month">
          <a href="/enero" className={month === "enero" ? "active" : ""}>
            <img src={icoMenu1} alt="enero" title="enero" />
          </a>
          <a href="/febrero" className={month === "febrero" ? "active" : ""}>
            <img src={icoMenu2} alt="Febrero" title="Febrero" />
          </a>
          <a href="/marzo" className={month === "marzo" ? "active" : ""}>
            <img src={icoMenu3} alt="Marzo" title="Marzo" />
          </a>
          <a href="/abril" className={month === "abril" ? "active" : ""}>
            <img src={icoMenu4} alt="Abril" title="Abril" />
          </a>

          <a href="/mayo" className={month === "mayo" ? "active" : ""}>
            <img src={icoMenu5} alt="Mayo" title="Mayo" />
          </a>
          <a href="/junio" className={month === "junio" ? "active" : ""}>
            <img src={icoMenu6} alt="Junio" title="Junio" />
          </a>
          <a href="/julio" className={month === "julio" ? "active" : ""}>
            <img src={icoMenu7} alt="Julio" title="Julio" />
          </a>
          <a href="/agosto" className={month === "agosto" ? "active" : ""}>
            <img src={icoMenu8} alt="Agosto" title="Agosto" />
          </a>

          <a
            href="/septiembre"
            className={month === "septiembre" ? "active" : ""}
          >
            <img src={icoMenu9} alt="Septiembre" title="Septiembre" />
          </a>
          <a href="/octubre" className={month === "octubre" ? "active" : ""}>
            <img src={icoMenu10} alt="Octubre" title="Octubre" />
          </a>
          <a
            href="/noviembre"
            className={month === "noviembre" ? "active" : ""}
          >
            <img src={icoMenu11} alt="Noviembre" title="Noviembre" />
          </a>
          <a
            href="/diciembre"
            className={month === "diciembre" ? "active" : ""}
          >
            <img src={icoMenu12} alt="Diciembre" title="Diciembre" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavInterna;
