import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErrorMessage, setloginErrorMessage] = useState(false)
    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault()
        if (email === "ali@mail.com" && password === "12345") {
            sessionStorage.setItem("user","ali@mail.com")
            navigate('/dashboard')
        }
        else {
            setloginErrorMessage(true)
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>User Login</h2>
                    { loginErrorMessage && 
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Username or Password Fail!
                        <button onClick={(evt)=> setloginErrorMessage(false)} type="button" className="btn-close"  aria-label="Close"></button>
                    </div>
                    }
                    <form onSubmit={fncSend}>
                        <input required type='email' className="form-control mt-2" onChange={(evt) => setEmail(evt.target.value)} placeholder="E-Mail" />
                        <input required type='password' className="form-control mt-2" onChange={(evt) => setPassword(evt.target.value)} placeholder="Password" />
                        <button className="btn btn-primary mt-2" type='submit'>Send</button>
                    </form>


                </div>
                <div className="col-sm-4"></div>
            </div>



        </>
    )
}

export default Login