const TableData=[
    {
        // id: "6232b926832460e7f189e0ff",
        name: "wwwww",
        work_order: "work5",
        company: "this is description",
        workers: 30,
        startDate: '2022/12/21',
        endDate: '2022/11/22',
        status: "true",
        
    },
    {
        // id: "6232c01f832460e7f189e170",
        name: "abcd",
        work_order: "work1",
        company: "mango",
        workers: 2,
        startDate: '2022/12/21',
        endDate: '2022/11/22',
        status: "true",
        
    },
    {
        // id: "6232c02a832460e7f189e172",
        name: "abcd",
        work_order: "work1",
        company: "mango",
        workers: 2,
        startDate: '2022/12/21',
        endDate: '2022/11/22',
        status: "true",
        
    }
]
export default TableData;
//import React, {useState,useEffect} from 'react'
// import axios from 'axios';
// import Table from './Table';

//  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIzMmI3MTk4MzI0NjBlN2YxODllMGU4IiwiaWF0IjoxNjQ3NDkxMjgzLCJleHAiOjE2NDc1Nzc2ODN9.gB9Rx0jwbI-uF1uQNHtMJrqLoJOGJTS8O3fldNmY9nE"
//  const apiUrl = 'http://94.237.3.78:4000/api'

//  const authAxios = axios.create({
//      baseURL:apiUrl,
//      headers :{
//          Authorization : `Bearer ${token}`,
//      }
//  });

//  function Getwork() {
//  const [data, setData] = useState([]);
   
 
//  useEffect(() => {
//     fetchData();
//   }, []);

// console.log(data,"fff")
//   async function fetchData() {
//     await authAxios.get('/getAllWorkOrders')
//      //.then((response) => {setData(response.data)})
//      .then((response) => {console.log(response.data)});
    
//   }


// const column = [
//   { heading: 'Name', value: 'name' },
//   { heading: 'Workers', value: 'workers' },
//   { heading: 'Company', value: 'company' },
//   { heading: 'Work Order', value: 'work_order' },
//   { heading: 'Start Date', value: 'start_date' },
//   { heading: 'End Date', value: 'end_date' },
//   { heading: 'Status', value: 'status' },
// ]
// return (
//     <div>
//       {  
//          data.data.map((item)=>{
//         console.log("fdfdfh",item)
//       })
//       }
//         {/* {
//         data.data.map((item)=>{
//           console.log("jdfj",item)
//             return(<p key={item.name}>{item.worker}</p>)
//             // <p>{user.name}</p>
//             })
//     }  */}
//   </div>
//   )
// }

 
// export default Getwork;

