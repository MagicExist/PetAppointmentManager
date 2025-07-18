import axios from 'axios'
import './PetCreateView.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PetCreateView(){

    const [petName,setPetName] = useState('')
    const [petAge,setPetAge] = useState('')
    const [petRace,setPetRace] = useState('')

    const navigate = useNavigate()

    const apiUrl = import.meta.env.VITE_API_URL

    const CreatePet = (e) => {
        e.preventDefault()

        axios.post(`${apiUrl}/pet/`,{
            name: petName,
            age: petAge,
            race: petRace
        })
            .then(()=>{
                console.log("pet Created")
                navigate('/pet')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div className="container mainContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-white'>Pet Create</h1>
            <form onSubmit={CreatePet} method='post' className='mt-2 h-75 d-flex align-content-center justify-content-center w-100'>
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
                        <button type='submit' className='btn btn-success'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}