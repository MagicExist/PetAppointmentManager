import { useEffect, useState } from 'react'
import './AppointmentCardComponent.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AppointmentCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    const [appointmentList,setAppointmentList] = useState([])
    const [petList,setPetList] = useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/pet/`)
        .then(response => {
            setPetList(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    useEffect(()=>{
        axios.get(`${apiUrl}/appointment/`)
        .then(response => {
            console.log(response.data)
            setAppointmentList(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    
    const DeleteHandle = (id) => {
        
        axios.delete(`${apiUrl}/appointment/${id}/`)
            .then(()=>{
                const updateAppointments = appointmentList.filter(item => item.id !== id)
                setAppointmentList(updateAppointments)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const EditHandle = (id,priority,pet_id,date,time,proccedure,medic)=>{
        navigate(`/appointment/edit/${id}`,{state:{
            priority:priority,
            pet_id:pet_id,
            date:date,
            time:time,
            proccedure:proccedure,
            medic:medic
        }})
    }

    const PetRender = (currentPetId) => {
        const pet = petList.find(p => p.id === currentPetId);

        if (pet) {
            return <p>{pet.name}</p>;
        } else {
            return <p>Pet no encontrado</p>;
        }
    }

    return(
        <div className="card-container">
            <div className="card-header card-alignment mt-3">
                <div className='card-alignment-containers'><p>Priority</p></div>
                <div className='card-alignment-containers'><p>Pet</p></div>
                <div className='card-alignment-containers'><p>Date</p></div>
                <div className='card-alignment-containers'><p>Time</p></div>
                <div className='card-alignment-containers'><p>Proccedure</p></div>
                <div className='card-alignment-containers'><p>Medic</p></div>
                <div className='card-alignment-containers'><p>Options</p></div>
            </div>
            {appointmentList.map((appointment,index) => (
                <div className="card-body card-alignment mb-3" key={index}>
                    <div className='card-alignment-containers'><p>{appointment.priority}</p></div>
                    <div className='card-alignment-containers'>{PetRender(appointment.pet)}</div>
                    <div className='card-alignment-containers'><p>{appointment.date}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.time}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.proccedure}</p></div>
                    <div className='card-alignment-containers'><p>{appointment.medic}</p></div>
                    <div className='card-alignment-containers'>
                        <button onClick={()=>{EditHandle(appointment.id,appointment.priority,appointment.pet,appointment.date,appointment.time,appointment.proccedure,appointment.medic)}} className='btn btn-primary me-2'>Edit</button>
                        <button onClick={()=>{DeleteHandle(appointment.id)}} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}