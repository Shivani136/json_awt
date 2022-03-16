
import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
   

    handleSubmit = e => {
        e.preventDefault();
         const data = {
           email: this.email,
            password: this.password,

        }
        console.log('it works', data);

        axios.post('/login', data).then(

            res => {
                localStorage.setItem("token",res.data.token);
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
                <form   className='m-5' onSubmit={this.handleSubmit}>

                <h4>Welcome To Login Page</h4>

                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control'
                            onChange={e => this.email = e.target.value} />

                    </div>
<br></br>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" placeholder='Password' className='form-control'
                            onChange={e => this.password = e.target.value} />
                    </div>

<br></br>
                    <div>
                        <button className="btn btn-primary btn-block">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
