import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

  const handleLinkClick = () => {
    // Cuando se hace clic en un enlace, desplázate hacia arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Puedes ajustar el comportamiento del desplazamiento
    });
  };

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
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>

        <Link
          to="/febrero"
          className={month === "febrero" ? "active" : ""}
          title="Febrero"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/marzo"
          className={month === "marzo" ? "active" : ""}
          title="Marzo"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/abril"
          className={month === "abril" ? "active" : ""}
          title="Abril"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>

        <Link
          to="/mayo"
          className={month === "mayo" ? "active" : ""}
          title="Mayo"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/junio"
          className={month === "junio" ? "active" : ""}
          title="Junio"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/julio"
          className={month === "julio" ? "active" : ""}
          title="Julio"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/agosto"
          className={month === "agosto" ? "active" : ""}
          title="Agosto"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>

        <Link
          to="/septiembre"
          className={month === "septiembre" ? "active" : ""}
          title="Septiembre"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/octubre"
          className={month === "octubre" ? "active" : ""}
          title="Octubre"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/noviembre"
          className={month === "noviembre" ? "active" : ""}
          title="Noviembre"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
        <Link
          to="/diciembre"
          className={month === "diciembre" ? "active" : ""}
          title="Diciembre"
          onClick={handleLinkClick}
        >
          &nbsp;
        </Link>
      </nav>

      <TransitionGroup>
        <CSSTransition
          key={month}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default NavInterna;
