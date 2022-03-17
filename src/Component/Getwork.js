import React, { useState, useEffect } from 'react'
import axios from 'axios';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIzMmI3MTk4MzI0NjBlN2YxODllMGU4IiwiaWF0IjoxNjQ3NDkxMjgzLCJleHAiOjE2NDc1Nzc2ODN9.gB9Rx0jwbI-uF1uQNHtMJrqLoJOGJTS8O3fldNmY9nE"
const apiUrl = 'http://94.237.3.78:4000/api'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

function Getwork() {


  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "fff")
  async function fetchData() {
    await authAxios.get('/getAllWorkOrders')
      .then((response) => { setData(response.data) })
    //.then((response) => {console.log(response.data.data)});

  }


  return (

    <div>
      <table class="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Workers</th>
            <th scope="col">Company</th>
            <th scope="col">Work Order</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.data.map(item => {
              console.log("gdghdfgsgf", item)
              return (

                <tr>
                  <td scope="row">{item.name}</td>
                  <td scope="row">{item.workers}</td>
                  <td scope="row">{item.company}</td>
                  <td scope="row">{item.work_order}</td>
                  <td scope="row">{item.start_date}</td>
                  <td scope="row">{item.end_date}</td>
                  <td scope="row">{item.status}</td>

                </tr>

              )
            })
          }


        </tbody>

      </table>
    </div>

  )
}


export default Getwork;