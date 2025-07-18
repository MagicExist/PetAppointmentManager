import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppointmentCreateView(){

    const [priority,setPriority] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [proccedure,setProccedure] = useState('')
    const [medic,setMedic] = useState('')
    const [petId,setPetId] = useState('')

    const [petList,setPetList] = useState([])

    const navigate = useNavigate()

    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(()=>{
        axios.get(`${apiUrl}/pet/`)
        .then(response => {
            setPetList(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    const CreateAppointment = (e) => {
        e.preventDefault()

        if (petId === "") {
            alert("You must select a race")
            return
        }

        axios.post(`${apiUrl}/appointment/`,{
            priority: priority,
            date: date,
            time: time,
            proccedure: proccedure,
            medic: medic,
            pet: petId
        })
            .then(()=>{
                navigate('/')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div className="container mainContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-white'>Appointment Create</h1>
            <form onSubmit={CreateAppointment} method='post' className='mt-2 h-75 d-flex flex-column align-content-center justify-content-center w-75 form-container rounded-4'>
                <div className='d-flex h-100 justify-content-evenly'>
                    <div className="row p-4 flex-column text-white fs-5 w-50">
                        <div className='col mt-0 d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputPriority">Priority</label>
                            <input placeholder='Priority' className='form-control w-50' id='inputPriority' value={priority} onChange={(e) => {setPriority(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputDate">Date</label>
                            <input type='date' placeholder='Date' className='form-control w-50' id='inputDate' value={date} onChange={(e) => {setDate(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputTime">Time</label>
                            <input type='time' placeholder='Time' className='form-control w-50' id='inputTime' value={time} onChange={(e) => {setTime(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="row p-4 flex-column form-container rounded-4 text-white fs-5 w-50">
                        <div className='col mt-0 d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputProccedure">Proccedure</label>
                            <input placeholder='Proccedure' className='form-control w-50' id='inputProccedure' value={proccedure} onChange={(e) => {setProccedure(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputMedic">Medic</label>
                            <input placeholder='Medic' className='form-control w-50' id='inputMedic' value={medic} onChange={(e) => {setMedic(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="selectPet">Pet</label>
                            <select class="form-control w-50" id="selectPet" value={petId} onChange={(e)=>{setPetId(e.target.value)}}>
                                <option value={""}>Pet</option>
                                {petList.map((pet,index)=>(
                                    <option value={pet.id} key={index}>{pet.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className='col d-flex flex-column align-items-center justify-content-center m-4'>
                    <button type='submit' className='btn btn-success btn-lg'>Create</button>
                </div>
            </form>
        </div>
    )
}