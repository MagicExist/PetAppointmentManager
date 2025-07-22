import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AppointmentEditView.css'
import { useLocation,useParams } from 'react-router-dom'

export default function AppointmentEditView(){

    const {id} = useParams()

    const location = useLocation()
    const { priority, pet_id, date, time, proccedure, medic } = location.state || {};

    const [priorityState, setPriority] = useState(priority || '');
    const [petId, setPetId] = useState(pet_id || '');
    const [dateState, setDate] = useState(date || '');
    const [timeState, setTime] = useState(time || '');
    const [proccedureState, setProccedure] = useState(proccedure || '');
    const [medicState, setMedic] = useState(medic || '');

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
            
            return appointmentTime === timeState && appointment.date === dateState && appointment.medic.toLowerCase() === medicState.toLowerCase()})

        console.log(dateTimeValidation)
        if(priorityState === ''){
            return "Priority is required"
        }
        if(!regex.test(priorityState)){
            return "Priority must contain only letters and spaces.";
        }

        if(proccedureState === ''){
            return "Proccedure is required"
        }
        if(!regex.test(proccedureState)){
            return "Proccedure must contain only letters and spaces.";
        }

        if(medicState === ''){
            return "Medic is required"
        }
        if(!regex.test(medicState)){
            return "Medic must contain only letters and spaces.";
        }
        
        if(dateState === ''){
            return "Date is required"
        }

        if(timeState === ''){
            return "Time is required"
        }
        
        if (petId === "") {
            return "You must select a pet"
        }

        if(!isDateInFutureOrToday(dateState)){
            return "You must select a valid date"
        }

        if(dateTimeValidation){
            return "There is already an appointment scheduled at this medic,date and time."
        }
        
    }

    const EditAppointment = (e) => {
        e.preventDefault();

        const validationError = FormValidations()

        if(validationError){
            alert(validationError)
            return
        }

        axios.put(`${apiUrl}/appointment/${id}/`, {
            priority: priorityState,
            pet: petId,
            date: dateState,
            time: timeState,
            proccedure: proccedureState,
            medic: medicState
        })
        .then(() => {
            console.log("Appointment updated");
            navigate('/');
        })
        .catch(err => {
            console.error(err);
        });
    };
    return(
        <div className="container mainContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-white'>Appointment Edit</h1>
            <form onSubmit={EditAppointment} method='put' className='mt-2 h-75 d-flex flex-column align-content-center justify-content-center w-75 form-container rounded-4'>
                <div className='d-flex h-100 justify-content-evenly'>
                    <div className="row p-4 flex-column text-white fs-5 w-50">
                        <div className='col mt-0 d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputPriority">Priority</label>
                            <input placeholder='Priority' className='form-control w-50' id='inputPriority' value={priorityState} onChange={(e) => {setPriority(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputDate">Date</label>
                            <input type='date' placeholder='Date' className='form-control w-50' id='inputDate' value={dateState} onChange={(e) => {setDate(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputTime">Time</label>
                            <input type='time' placeholder='Time' className='form-control w-50' id='inputTime' value={timeState} onChange={(e) => {setTime(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="row p-4 flex-column form-container rounded-4 text-white fs-5 w-50">
                        <div className='col mt-0 d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputProccedure">Proccedure</label>
                            <input placeholder='Proccedure' className='form-control w-50' id='inputProccedure' value={proccedureState} onChange={(e) => {setProccedure(e.target.value)}}/>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <label htmlFor="inputMedic">Medic</label>
                            <input placeholder='Medic' className='form-control w-50' id='inputMedic' value={medicState} onChange={(e) => {setMedic(e.target.value)}}/>
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
                    <button type='submit' className='btn btn-primary btn-lg editBtn'>Edit</button>
                </div>
            </form>
        </div>
    )
}