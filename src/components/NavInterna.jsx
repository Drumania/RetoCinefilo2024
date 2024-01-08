import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const NavInterna = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { month } = useParams();

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
        <Link
          to="/enero"
          className={month === "enero" ? "active" : ""}
          title="Enero"
        >
          &nbsp;
        </Link>

        <Link
          to="/febrero"
          className={month === "febrero" ? "active" : ""}
          title="Febrero"
        >
          &nbsp;
        </Link>
        <Link
          to="/marzo"
          className={month === "marzo" ? "active" : ""}
          title="Marzo"
        >
          &nbsp;
        </Link>
        <Link
          to="/abril"
          className={month === "abril" ? "active" : ""}
          title="Abril"
        >
          &nbsp;
        </Link>

        <Link
          to="/mayo"
          className={month === "mayo" ? "active" : ""}
          title="Mayo"
        >
          &nbsp;
        </Link>
        <Link
          to="/junio"
          className={month === "junio" ? "active" : ""}
          title="Junio"
        >
          &nbsp;
        </Link>
        <Link
          to="/julio"
          className={month === "julio" ? "active" : ""}
          title="Julio"
        >
          &nbsp;
        </Link>
        <Link
          to="/agosto"
          className={month === "agosto" ? "active" : ""}
          title="Agosto"
        >
          &nbsp;
        </Link>

        <Link
          to="/septiembre"
          className={month === "septiembre" ? "active" : ""}
          title="Septiembre"
        >
          &nbsp;
        </Link>
        <Link
          to="/octubre"
          className={month === "octubre" ? "active" : ""}
          title="Octubre"
        >
          &nbsp;
        </Link>
        <Link
          to="/noviembre"
          className={month === "noviembre" ? "active" : ""}
          title="Noviembre"
        >
          &nbsp;
        </Link>
        <Link
          to="/diciembre"
          className={month === "diciembre" ? "active" : ""}
          title="Diciembre"
        >
          &nbsp;
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default NavInterna;
