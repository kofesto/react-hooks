import React,{useState} from 'react'

function Register() {

  const [formValues, setFormValues] = useState({
                                                firstname:"",
                                                lastname:"",
                                                email:"",
                                                password:""
                                            })
  const [error, setError] = useState({})
  const handleChange = (e)=> setFormValues(prevInput=>(
    {...prevInput,[e.target.name]:e.target.value}
  ))

  function handleError(input, errorMessage){
    setError(prevError =>({...prevError,[input]:errorMessage}))
  }

  function validate(){
    let valid = true;
    if(formValues.firstname ===''){
        handleError('firstname','please enter your firstname')
        valid = false;
    }
    if(formValues.lastname ===''){
        handleError('lastname','please enter your lastname')
        valid = false;
    }
    if(formValues.email ===''){
        handleError('email','please enter your email')
        valid = false;
    }
    if(formValues.password ===''){
        handleError('password','please enter password')
        valid = false;
    }
  }

  return (
    <div>
        <div>
            <form>
                <div>
                    <label>Firstname</label>
                    <input onChange={handleChange} name='firstname' />
                    <p>{error ? error.firstname:""}</p>
                </div>
                <div>
                    <label>Lastname</label>
                    <input onChange={handleChange} name='lastname' />
                    <p>{error ? error.lastname:""}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={handleChange} name='email' />
                    <p>{error ? error.email:""}</p>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handleChange} name='password' />
                    <p>{error ? error.firstname:""}</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register