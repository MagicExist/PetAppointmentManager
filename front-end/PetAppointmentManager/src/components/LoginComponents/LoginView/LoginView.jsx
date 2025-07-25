import './LoginView.css'


export default function LoginView(){

    return(
        <div className="container  d-flex justify-content-center align-items-center mainContainer text-white">
            <div className="row rowContainer justify-content-center w-50 flex-column rounded-4">
                <div className='col d-flex flex-column align-items-center'>
                    <h1 className='mb-5 mt-5'>Login</h1>
                    <form className='d-flex flex-column align-items-center w-100 mt-5 mb-5' method='post'>
                        <div className='d-flex flex-column w-100  align-items-center justify-content-center mb-4'>
                            <label htmlFor='inputUsername' className='mb-2 fs-5 loginLabel'>Username</label>
                            <input placeholder='Username' id='inputUsername' className='form-control w-25'/>
                        </div>
                        <div className='d-flex flex-column w-100  align-items-center justify-content-center'>
                            <label htmlFor='inputPassword' className='mb-2 fs-5 loginLabel'>Password</label>
                            <input type='password' placeholder='Password' id='inputPassword' className='form-control w-25'/>
                        </div>
                    </form>
                    <button className='btn btn-primary loginBtn'>Login</button>
                </div>
                
            </div>
        </div>
    )
}