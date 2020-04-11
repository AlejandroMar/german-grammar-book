import React from "react"
import { Link } from "gatsby"
import style from "./side-bar.module.css"
import Accordion from "./accordion"

const linksData = [
  {
    name: "Indice",
    path: "/",
  },
  {
    name: "Glosario",
    path: "/glosario",
  },
]

class SideBar extends React.Component {
  state = {
    closeAcordion: true,
  }

  accordionOnOff = () => {
    const { closeAcordion } = this.state
    this.setState({ closeAcordion: !closeAcordion })
  }

  render() {
    const { closeAcordion } = this.state
    console.log("state changes: ", closeAcordion)
    return (
      <nav className={style.navbar}>
        <Accordion className={style.navbarNav} links={linksData} />
        <ul className={style.navbarNav}>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              Indice
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/glosario" className={style.navLink}>
              Glosario
            </Link>
          </li>

          <li
            className={`${style.navItem}  ${
              closeAcordion ? style.accordion : ""
            }`}
          >
            <Link
              to="/nombres"
              className={style.navLink}
              onClick={this.accordionOnOff}
            >
              Nombres
            </Link>

            <ul className={style.navbarNav}>
              <li className={style.navItem}>
                <Link to="/nombres/genero" className={style.navLink}>
                  Genero
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/nombres/nombres_masculinos"
                  className={style.navLink}
                >
                  Nombres Masculinos
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${style.navItem}  ${
              closeAcordion ? style.accordion : ""
            }`}
          >
            <Link
              to="/nombres"
              className={style.navLink}
              onClick={this.accordionOnOff}
            >
              Verbos
            </Link>

            <ul className={style.navbarNav}>
              <li className={style.navItem}>
                <Link to="/nombres/genero" className={style.navLink}>
                  Genero
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/nombres/nombres_masculinos"
                  className={style.navLink}
                >
                  Nombres Masculinos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SideBar
