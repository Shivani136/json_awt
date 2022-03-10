import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {

    handleSubmit= e=>{
        e.preventDefault();
        const data={
            first_name : this.firstName,
            last_name : this.lastName,
            email : this.email,
            password: this.password,
            confirm_password: this.confirm_password
        }
    console.log('it works',data);
    
    axios.post('https://jsonplaceholder.typicode.com/posts',data).then(
        res=>{
            console.log(res)
        }
        ).catch(
            err =>{
                console.log(err)
            }
    )

    
        }
   
  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
      

       <div className='form-group'>
        
        <label>First Name</label>
        <input type="text" placeholder='Enter First Name' className='form-control' 
           onChange={e=> this.firstName = e.target.value} />
        
       </div>

       <div className='form-group'>
       
        <label>Last Name</label>
        <input type="text" placeholder='Enter Last Name' className='form-control' 
         onChange={e=> this.lastName = e.target.value} />
         
       </div>
       <div className='form-group'>
       <label>Email</label>
        <input type="text" placeholder='Enter Email' className='form-control'
        onChange={e=> this.email = e.target.value} />
     
       </div>

       <div className='form-group'>
        <label>Password</label>
        <input type="password" placeholder='Password' className='form-control'
         onChange={e=> this.password = e.target.value}  />
       </div>

       <div className='form-group'>
        <label>Confim Password</label>
        <input type="password" placeholder='Confirm Password' className='form-control' 
         onChange={e=> this.confirm_password = e.target.value} />
       </div>
       <div>
       <button className="btn btn-primary btn-block">Register</button>
       </div>
      </form>
      </div>
    )
  }
}
