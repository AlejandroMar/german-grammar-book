import React from 'react'

const TableRows = ({ table }) => {
  if (table && table.length) {
    return table.map((row, index) => {
      const keys = Object.keys(row)
      return (
        <tr key={`${index}-1`}>
          {keys.map((key, i) => (
            <td key={`${index}-${[key]}`}>{row[key]}</td>
          ))}
        </tr>
      )
    })
  }
  return null
}

const TableHeaders = ({ table }) => {
  if (table && table.length) {
    const keys = Object.keys(table[0])
    return keys.map((key, i) => {
      return (
        <th className="gray" key={i}>
          {key.toUpperCase()}
        </th>
      )
    })
  }
  return null
}

const VerbsTable = ({ table, displayHeader = true }) => {
  return (
    <div>
      <table>
        <tbody>
          {displayHeader && (
            <tr>
              <TableHeaders table={table} />
            </tr>
          )}
          <TableRows table={table} />
        </tbody>
      </table>
    </div>
  )
}

export default VerbsTable
