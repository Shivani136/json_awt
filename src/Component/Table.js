import React from 'react'
//import './table.css'

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => <TableRow item={item} column={column} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table

//  function Table({data,column}) {
  // return (
    
  //       <div>
  //           Table
  //       <table>
  //         <tr>
  //           <th>Event title</th>
  //           <th>Event location</th> 
  //         </tr>
  //         <tr>
  //           <td>First event title </td> 
  //           <td>San Fran</td>
  //         </tr>
  //         <tr>
  //           <td>Second event title </td> 
  //           <td>London</td> 
  //         </tr>
  //       </table>
    
  //   </div>
  // )
