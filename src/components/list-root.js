import React from "react"
import NestedNavBar from "./nested-nav-bar"
import style from "./list-root.module.css"

const ListRoot = ({ content, className }) => {
  return (
    <ul className={className}>
      {content.map((item, i) => (
        <NestedNavBar content={item} key={i} />
      ))}
    </ul>
  )
}

export default ListRoot
