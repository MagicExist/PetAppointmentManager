import { useEffect, useState } from 'react'
import './PetCardComponent.css'
import axios from 'axios'

export default function PetCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL

    const [petList,setPetList] = useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/pet`)
        .then(response => {
            console.log(response.data)
            setPetList(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    

    return(
        <div className="card-container">
            <div className="card-header card-alignment mt-3">
                <div className='card-alignment-containers'><p>Name</p></div>
                <div className='card-alignment-containers'><p>Race</p></div>
                <div className='card-alignment-containers'><p>Age</p></div>
            </div>
            {petList.map((pet,index) => (
                <div className="card-body card-alignment mb-3" key={index}>
                    <div className='card-alignment-containers'><p>{pet.name}</p></div>
                    <div className='card-alignment-containers'><p>{pet.race}</p></div>
                    <div className='card-alignment-containers'><p>{pet.age}</p></div>
                </div>
            ))}
            
        </div>
    )
}