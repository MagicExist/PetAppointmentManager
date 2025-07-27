import { useState } from 'react'
import './RegisterView.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function RegisterView(){

    const apiUrl = import.meta.env.VITE_API_URL

    const navigate = useNavigate()

    const [usernameState,setUsername] = useState('')
    const [passwordState,setPassword] = useState('')

    const credentialValidation = () => {
        if(usernameState === ''){
            return "Username field is required"
        }
        if(passwordState === ''){
            return "Password field is required"
        }
    }

    const LoginRequest = (e) => {
        e.preventDefault()

        const error = credentialValidation()

        if(error){
            return alert(error)
        }

        axios.post(`${apiUrl}/register/`,{
            username: usernameState,
            password: passwordState
        })
        .then(()=>{
            navigate('/login/')
        })
        .catch(err => {
            alert(err.response.data.error)
        })
    }
    return(
        <div className="container  d-flex justify-content-center align-items-center mainContainer text-white">
            <div className="row rowContainer justify-content-center w-50 flex-column rounded-4">
                <div className='col d-flex flex-column align-items-center'>
                    <h1 className='mb-5 mt-5'>Register</h1>
                    <form onSubmit={LoginRequest} className='d-flex flex-column align-items-center w-100 mt-5 mb-5' method='post'>
                        <div className='d-flex flex-column w-100  align-items-center justify-content-center mb-4'>
                            <label htmlFor='inputUsername' className='mb-2 fs-5 loginLabel'>Username</label>
                            <input onChange={(e)=>{setUsername(e.target.value)}} value={usernameState} placeholder='Username' id='inputUsername' className='form-control w-25'/>
                        </div>
                        <div className='d-flex flex-column w-100  align-items-center justify-content-center'>
                            <label htmlFor='inputPassword' className='mb-2 fs-5 loginLabel'>Password</label>
                            <input onChange={(e)=>{setPassword(e.target.value)}} value={passwordState} type='password' placeholder='Password' id='inputPassword' className='form-control w-25'/>
                        </div>
                        <button type='submit' className='btn btn-success loginBtn mt-4'>Register</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}