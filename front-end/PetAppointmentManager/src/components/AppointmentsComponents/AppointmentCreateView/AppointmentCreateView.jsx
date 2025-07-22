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
    const [appointmentList,setAppointmentList] = useState([])

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


    const isDateInFutureOrToday = (inputDate) => {

    const today = new Date();
    today.setHours(0,0,0,0);

    const dateParts = inputDate.split('-');
    const localDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    localDate.setHours(0,0,0,0);


    return localDate >= today;
    };

    const FormValidations = () =>{
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
        const dateTimeValidation = appointmentList.some((appointment)=>{ 
            const appointmentTime = appointment.time.slice(0,5); // "HH:MM"
            return appointmentTime === time && appointment.date === date && appointment.medic.toLowerCase() === medic.toLowerCase()})

        console.log(dateTimeValidation)
        if(priority === ''){
            return "Priority is required"
        }
        if(!regex.test(priority)){
            return "Priority must contain only letters and spaces.";
        }

        if(proccedure === ''){
            return "Proccedure is required"
        }
        if(!regex.test(proccedure)){
            return "Proccedure must contain only letters and spaces.";
        }

        if(medic === ''){
            return "Medic is required"
        }
        if(!regex.test(medic)){
            return "Medic must contain only letters and spaces.";
        }
        
        if(date === ''){
            return "Date is required"
        }

        if(time === ''){
            return "Time is required"
        }
        
        if (petId === "") {
            return "You must select a pet"
        }

        if(!isDateInFutureOrToday(date)){
            return "You must select a valid date"
        }

        if(dateTimeValidation){
            return "There is already an appointment scheduled at this medic,date and time."
        }
        
    }

    const CreateAppointment = (e) => {
        e.preventDefault()

        const validationError = FormValidations()

        if(validationError){
            alert(validationError)
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