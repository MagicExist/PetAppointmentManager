import './AppointmentReadView.css'
import { useNavigate } from 'react-router-dom'
import AppointmentCardComponent from '../AppointmentCardComponent/AppointmentCardComponent'

export default function AppointmentReadView(){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/appointment/create')
    }

    return (
        <>
            <div className='container text-white'>
                <div className="d-flex align-items-center">
                    <h1 className='mb-3 mt-3 m-3'>Appointments</h1>
                    <button onClick={handleClick} id="addPetBtn" className="btn btn-success rounded-circle d-flex align-items-center p-1"><img src="/add-symbol.svg" alt="Add" className="img-fluid"/></button>
                </div>
                <AppointmentCardComponent></AppointmentCardComponent>
            </div>
        </>
    )
}