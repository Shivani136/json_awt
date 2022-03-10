
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

        axios.post('http://94.237.3.78:4000/api/login', data).then(
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
                <form onSubmit={this.handleSubmit}>



                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control'
                            onChange={e => this.email = e.target.value} />

                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" placeholder='Password' className='form-control'
                            onChange={e => this.password = e.target.value} />
                    </div>


                    <div>
                        <button className="btn btn-primary btn-block">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
