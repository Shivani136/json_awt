import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Table from './Table';

 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIyZWM2OWRkMWE5OGVkN2I3M2RlYmU2IiwiaWF0IjoxNjQ3MzUwNjg0LCJleHAiOjE2NDc0MzcwODR9.ceCuJsX--cMshv7inWQo1sJ2wlYftdgzEwsSRuiAAdk"
 const apiUrl = 'http://94.237.3.78:4000/api'

 const authAxios = axios.create({
     baseURL:apiUrl,
     headers :{
         Authorization : `Bearer ${token}`,
     }
 });

 function Getwork() {
   const[src, setSrc] = useState("");
   const [data, setData] = useState([]);
   const [loadingData, setLoadingData] = useState(true);
   const [dataTable, setDataTable] = useState([]);
 
 useEffect(() => {
    fetchData();
  }, [data]);

  async function fetchData() {
    await authAxios.get('/getAllWorkOrders')
     // .then((response) => {setData(response.data)})
      .then((response) => {console.log(response.data)});
      setLoadingData(false);
  }

//  useEffect(() => {
//     axios('https://jsonplaceholder.typicode.com/users')
//       .then(res => setDataTable(res.data))
//       .catch(err => console.log(err))
//   }, []);

const column = [
  { heading: 'Name', value: 'name' },
  { heading: 'Workers', value: 'workers' },
  { heading: 'Company', value: 'company' },
  { heading: 'Work Order', value: 'work_order' },
  { heading: 'Start Date', value: 'start_date' },
  { heading: 'End Date', value: 'end_date' },
  { heading: 'Status', value: 'status' },
]




   return (
    <div>
        {/* <h4>Welcome To Get All Work Order Page</h4> */}
        <Table data={dataTable} column={column} />
    <button onClick={(e)=>fetchData()} className="btn btn-success btn-block"> GET data</button>
    {loadingData ? (
        <p>Loading Please wait...</p>
      ) 
      : (
      
        <Table data={data} />
      )
      }
    {/* <div>{data}</div> */}
    {/* {
        data.map(data=>{
            return(<p key={data.name}>{data.worker}</p>)
            // <p>{user.name}</p>
            })
    } */}
  </div>
  )
}

 
export default Getwork;