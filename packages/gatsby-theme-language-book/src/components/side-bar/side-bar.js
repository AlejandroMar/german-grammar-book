import React, { useState, useEffect } from 'react'
import style from './side-bar.module.css'
//import sideBarData from '../../../data/sideBarData.yaml'
import NestedNavBar from '../nested-nav-bar/nested-nav-bar'
import { useStaticQuery, graphql } from 'gatsby'

const SideBar = props => {
  // this query will give only three levels of recursion
  // if in need of more levels add another to the query
  const sideBarData = useStaticQuery(graphql`
    query MyQuery {
      allMenuLink {
        edges {
          node {
            name
            path
            items {
              name
              path
              items {
                name
                path
                items {
                  name
                  path
                }
              }
            }
          }
        }
      }
    }
  `)

  const [openNavbar, setopenNavbar] = useState(false)

  const openNavbarNav = () => {
    setopenNavbar(!openNavbar)
  }

  return (
    <nav className={`${style.navbar} ${openNavbar ? style.openNav : ''}`}>
      <button
        type="button"
        onClick={openNavbarNav}
        className={style.navBarButton}
      >
        {openNavbar ? 'Menü schließen' : 'Menü öffnen'}
      </button>
      <ul className={`${style.navbarNav}`}>
        <NestedNavBar
          content={sideBarData.allMenuLink.edges}
          location={props.location}
          openNavbarNav={openNavbarNav}
        />
      </ul>
    </nav>
  )
}

export default SideBar
