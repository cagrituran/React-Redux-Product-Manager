import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
function Register() {
  const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [validation, setValidation] = useState(false)
    const [passwordvalidation, setPasswordValidation] = useState(false)

    const fncOk = (evt:React.FormEvent) => {
        evt.preventDefault()
        console.log(email,name,password)
        if (password!==repassword) {
          setPasswordValidation(true)
        }


        if (email === "ali@mail.com") {
          setValidation(true)
        }
        else if(email !== "ali@mail.com" && password===repassword){
          navigate('/')

        }

    }


  return (
    <>
    <section className="vh-100" style={{backgroundColor:'#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius:'25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                { validation && 
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Email Already Exist
                        <button onClick={(evt)=> setValidation(false)} type="button" className="btn-close"  aria-label="Close"></button>
                    </div>
                    }

                <form className="mx-1 mx-md-4" onSubmit={fncOk}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input required type="text" id="form3Example1c" className="form-control" onChange={(evt)=>setName(evt.target.value)}/>
                      <label className="form-label">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input required type="email" id="form3Example3c" className="form-control" onChange={(evt)=>setEmail(evt.target.value)} />
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input required type="password" id="form3Example4c" className="form-control" onChange={(evt)=>setPassword(evt.target.value)} />
                      <label className="form-label" >Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input required type="password" id="form3Example4cd" className="form-control" onChange={(evt)=>setRepassword(evt.target.value)}/>
                      <label className="form-label" >Repeat your password{
                        password!==repassword && <p className="text-danger">password does not match!</p>
                      }</label>
                    </div>
                    
                  </div>
                  <div>
                      
                    </div>
                    {passwordvalidation && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Password does not match !
                        <button onClick={(evt)=> setPasswordValidation(false)} type="button" className="btn-close"  aria-label="Close"></button>
                    </div>}


                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" >
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>

                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Register