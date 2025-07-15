import { useState } from 'react'
import './AppointmentCardComponent.css'
import axios from 'axios'

export default function AppointmentCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL

    const [appointmentList,setAppointmentList] = useState([])

    axios.get(`${apiUrl}/appointment`)
        .then(response => {
            setAppointmentList(response.data)
        })
        .catch(err => {
            console.error(err)
        })

    return(
        <div className="card-container">
            <div className="card-header card-alignment">
                <p>Priority</p>
                <p>Pet</p>
                <p>Date</p>
                <p>Time</p>
                <p>Proccedure</p>
                <p>Medic</p>
            </div>
            {appointmentList.map((appointment,index) => {
                <div className="card-body card-alignment" key={index}>
                    <p>{appointment.priority}</p>
                    <p>{appointment.pet}</p>
                    <p>{appointment.date}</p>
                    <p>{appointment.time}</p>
                    <p>{appointment.proccedure}</p>
                    <p>{appointment.medic}</p>
                </div>
            })}
            
        </div>
    )
}