import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
//import sideBarData from '../../../data/sideBarData.yaml'
import NestedNavBar from '../nested-nav-bar/nested-nav-bar'
import NavHamButton from './NavHamButton'
import style from './side-bar.module.css'

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
    <nav className={cx(style.navbar, openNavbar ? style.openNav : '')}>
      <NavHamButton openNavbarNav={openNavbarNav} style={style} />
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
