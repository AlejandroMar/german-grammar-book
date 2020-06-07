import React from 'react'

const TableRows = ({ table }) => {
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

const TableHeaders = ({ table }) => {
  const keys = Object.keys(table[0])
  return keys.map((key, i) => {
    return (
      <th className="gray" key={i}>
        {key.toUpperCase()}
      </th>
    )
  })
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
