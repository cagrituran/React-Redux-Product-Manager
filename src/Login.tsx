import React, { useState } from "react"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault()
        console.log(" fncSend Call",email,password)
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>User Login</h2>
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