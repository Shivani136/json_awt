import axios from 'axios'
import React, { Component } from 'react'

export default class Home extends Component {
  state={
        
  }
componentDidMount(){

  // const config ={
  //   headers :{
  //     authorization : 'Bearer' +localStorage.getItem('token')
  //   } }
  axios.get('user').then(
    res =>{
     this.setState=({
        user:res.data
      });
      console.log('res')
    }
  
  ).catch(
    err =>{
      console.log(err);
    }
  )
}

  render() {
    if(this.state.user){
   
      return(
        <div>
           <h1>{this.state.user.email}{this.state.user.password}</h1>
           {/* <h1>{this.state.user.name}
           {this.state.user.work_order}
           {this.state.user.company}
           {this.state.user.workers}
           {this.state.user.start_date}
           {this.state.user.end_date}
           {this.state.user.status} */}
           {/* </h1> */}
        </div>
          
      )
    }

    return (
      <div>
      
          <h4>HOME</h4>
      </div>
    )
  }
}
