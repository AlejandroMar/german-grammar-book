import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
//import sideBarData from '../../../data/sideBarData.yaml'
import NavHamButton from './nav-ham-button'
import style from './side-bar.module.css'
import { NavBarRoot } from './nav-bar-root'

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
      <NavHamButton openNavbarNav={openNavbarNav} style={style}/>
      <NavBarRoot sideBarData={sideBarData} location={props.location} openNavbarNav={openNavbarNav}/>
    </nav>
  )
}

export default SideBar
