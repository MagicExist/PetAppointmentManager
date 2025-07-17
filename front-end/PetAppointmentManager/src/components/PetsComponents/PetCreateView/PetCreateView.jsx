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
        <div className="container mainContainer bg-secondary d-flex align-items-center">
            <form onSubmit={CreatePet} method='post' className='d-flex align-content-center justify-content-center w-100'>
                <div className="row p-4 flex-column gy-4 w-100 bg-primary">
                    <div className='col mt-0 d-flex flex-column align-items-center'>
                        <label htmlFor="">Name</label>
                        <input value={petName} onChange={(e) => {setPetName(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center'>
                        <label htmlFor="">Age</label>
                        <input value={petAge} onChange={(e) => {setPetAge(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center'>
                        <label htmlFor="">Race</label>
                        <input value={petRace} onChange={(e) => {setPetRace(e.target.value)}}/>
                    </div>
                    <div className='col d-flex flex-column align-items-center'>
                        <button type='submit' className='btn btn-success'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}