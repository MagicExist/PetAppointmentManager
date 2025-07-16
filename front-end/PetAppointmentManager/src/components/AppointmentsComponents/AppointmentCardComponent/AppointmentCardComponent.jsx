import { useEffect, useState } from 'react'
import './AppointmentCardComponent.css'
import axios from 'axios'

export default function AppointmentCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL

    const [appointmentList,setAppointmentList] = useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/appointment`)
        .then(response => {
            console.log(response.data)
            setAppointmentList(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    

    return(
        <div className="card-container">
            <div className="card-header card-alignment">
                <div className='card-alignment-containers'><p>Priority</p></div>
                <div className='card-alignment-containers'><p>Pet</p></div>
                <div className='card-alignment-containers'><p>Date</p></div>
                <div className='card-alignment-containers'><p>Time</p></div>
                <div className='card-alignment-containers'><p>Proccedure</p></div>
                <div className='card-alignment-containers'><p>Medic</p></div>
            </div>
            {appointmentList.map((appointment,index) => (
                <div className="card-body card-alignment" key={index}>
                    <div className='card-alignment-containers'><p>{appointment.priority}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.pet}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.date}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.time}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.proccedure}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.medic}</p></div>
                </div>
            ))}
            
        </div>
    )
}