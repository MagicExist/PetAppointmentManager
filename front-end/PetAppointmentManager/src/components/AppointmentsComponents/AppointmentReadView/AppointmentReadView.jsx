import './AppointmentReadView.css'
import AppointmentCardComponent from '../AppointmentCardComponent/AppointmentCardComponent'

export default function AppointmentReadView(){


    return (
        <>
            <div className='container text-white'>
                <h1 className='mb-3 mt-3'>Appointments</h1>
                <AppointmentCardComponent></AppointmentCardComponent>
            </div>
        </>
    )
}