import './AppointmentReadView.css'
import AppointmentCardComponent from '../AppointmentCardComponent/AppointmentCardComponent'

export default function AppointmentReadView(){


    return (
        <>
            <div className='container'>
                <h1>Appointments</h1>
                <AppointmentCardComponent></AppointmentCardComponent>
            </div>
        </>
    )
}