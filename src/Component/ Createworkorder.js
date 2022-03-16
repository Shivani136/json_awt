import React, { Component } from 'react'
import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIyZWM2OWRkMWE5OGVkN2I3M2RlYmU2IiwiaWF0IjoxNjQ3MzUwNjg0LCJleHAiOjE2NDc0MzcwODR9.ceCuJsX--cMshv7inWQo1sJ2wlYftdgzEwsSRuiAAdk"
const apiUrl = 'http://94.237.3.78:4000/api'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

class Createworkorder extends Component {



  handleSubmit = e => {

    e.preventDefault();

    const data = {
      data: this.data,
      // loadingData: this.loadingData,
      name: this.name,
      work_order: this.work_order,
      company: this.company,
      workers: this.workers,
      start_date: this.start_date,
      end_date: this.end_date,
      status: this.status,
    }
    console.log('it works', data)




    authAxios.post('/createWorkOrder', data).then(


      res => {

        console.log(res)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )


  }
  render() {
    return (
      <div>
        <h4>This is Create Work Order Page</h4>
        <form  className='m-5' onSubmit={this.handleSubmit}>


          <div className='form-group'>

            <label>Name</label>
            <input type="text" placeholder='Enter Name' className='form-control'
              onChange={e => this.name = e.target.value} />

          </div>
          <br></br>
          <div className='form-group'>

            <label>Work Order</label>
            <input type="text" placeholder='Enter Work Order' className='form-control'
              onChange={e => this.work_order = e.target.value} />

          </div>
          <br></br>
          <div className='form-group'>
            <label>Company</label>
            <input type="text" placeholder='Enter Company' className='form-control'
              onChange={e => this.company = e.target.value} />

          </div>
          <br></br>
          <div className='form-group'>
            <label>Workers</label>
            <input type="number" placeholder='Enter Workers' className='form-control'
              onChange={e => this.workers = e.target.value} />
          </div>
          <br></br>
          <div className='form-group'>
            <label>Start Date</label>
            <input type="date" placeholder='Enter Start_date' className='form-control'
              onChange={e => this.start_date = e.target.value} />
          </div>
          <br></br>
          <div className='form-group'>
            <label>End Date</label>
            <input type="date" placeholder='Enter End_date' className='form-control'
              onChange={e => this.end_date = e.target.value} />
          </div>
          <br></br>
          <div className='form-group'>
            <label>Status</label>
            <input type="text" placeholder='Enter Status' className='form-control'
              onChange={e => this.status = e.target.value} />
          </div>

          <br></br>
          <div>
            <button className="btn btn-primary btn-block">Create Work Order</button>
          </div>
        </form>
      </div>
    )

  }
}
export default Createworkorder;