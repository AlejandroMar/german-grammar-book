import React from 'react'

export default function Hint({ text }) {
  return (
    <div style={{ margin: '3px 0 0 10px', color: 'grey', fontSize: '.5rem' }}>
      {text}
    </div>
  )
}
