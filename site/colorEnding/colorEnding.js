import React from 'react'

const ColorEnding = ({ c, children }) => {
  const style = {
    color: c,
  }
  return (
    <>
      <span style={style}>{children}</span>
    </>
  )
}

export default ColorEnding
