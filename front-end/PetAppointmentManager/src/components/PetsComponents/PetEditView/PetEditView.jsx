import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PetEditView.css'
import { useLocation,useParams } from 'react-router-dom'

export default function PetEditView(){

    const {id} = useParams()
    const {state} = useLocation()

    const [petName,setPetName] = useState(state.name)
    const [petAge,setPetAge] = useState(state.age)
    const [petRace,setPetRace] = useState(state.race)
    
    const navigate = useNavigate()

    const apiUrl = import.meta.env.VITE_API_URL

    const FormValidations = () =>{
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

        if(petName === ''){
            return "Pet name is required"
        }
        if(!regex.test(petName)){
            return "Name must contain only letters and spaces.";
        }

        if(petAge === ''){
            return "Pet age is required"
        }
        if(isNaN(petAge) || petAge <= 0 || petAge >= 100){
            return "Age value it's not valid"
        }

        if(petRace === ''){
            return "Pet race is required"
        }
        if(!regex.test(petRace)){
            return "Race must contain only letters and spaces.";
        }
    }

    const EditPet = (e) => {
        e.preventDefault()

        const validationError = FormValidations()

        if (validationError) {
            alert(validationError);
            return;
        }

        axios.put(`${apiUrl}/pet/${id}/`,{
            name: petName,
            age: petAge,
            race: petRace
        })
            .then(()=>{
                console.log("pet Edited")
                navigate('/pet')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div className="container mainContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-white'>Pet Edit</h1>
            <form onSubmit={EditPet} method='put' className='mt-2 h-75 d-flex align-content-center justify-content-center w-100'>
                <div className="row p-4 flex-column w-50 form-container rounded-4 text-white fs-5">
                    <div className='col mt-0 d-flex flex-column align-items-center justify-content-center'>
                        <label htmlFor="inputPetName">Name</label>
                        <input placeholder='Pet Name' className='form-control w-25' id='inputPetName' value={petName} onChange={(e) => {setPetName(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center justify-content-center'>
                        <label htmlFor="inputPetAge">Age</label>
                        <input placeholder='Pet Age' className='form-control w-25' id='inputPetAge' value={petAge} onChange={(e) => {setPetAge(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center justify-content-center'>
                        <label htmlFor="inputPetRace">Race</label>
                        <input placeholder='Pet Race' className='form-control w-25' id='inputPetRace' value={petRace} onChange={(e) => {setPetRace(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center justify-content-center'>
                        <button type='submit' className='btn btn-primary editBtn'>Edit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}