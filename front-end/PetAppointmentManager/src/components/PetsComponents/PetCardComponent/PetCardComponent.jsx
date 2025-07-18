import { useEffect, useState } from 'react'
import './PetCardComponent.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PetCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    const [petList,setPetList] = useState([])

    const fetchPets = () => {
        axios.get(`${apiUrl}/pet`)
            .then(response => {
                console.log(response.data);
                setPetList(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchPets();
    }, []);
    

    const DeletePetHandle = (id)=>{
        axios.delete(`${apiUrl}/pet/${id}/`)
        .then(() => {
            console.log("pet deleted")
            fetchPets();
        })
        .catch(err => {
            console.error(err)
        })
    }

    const EditPetHandle = (id,name,age,race)=>{
        navigate(`/pet/edit/${id}`,{state:{
            name:name,
            age:age,
            race:race
        }})
    }

    return(
        <div className="card-container">
            <div className="card-header card-alignment mt-3">
                <div className='card-alignment-containers'><p>Name</p></div>
                <div className='card-alignment-containers'><p>Race</p></div>
                <div className='card-alignment-containers'><p>Age</p></div>
                <div className='card-alignment-containers'><p>Options</p></div>
            </div>
            {petList.map((pet,index) => (
                <div className="card-body card-alignment mb-3" key={index}>
                    <div className='card-alignment-containers'><p>{pet.name}</p></div>
                    <div className='card-alignment-containers'><p>{pet.race}</p></div>
                    <div className='card-alignment-containers'><p>{pet.age}</p></div>
                    <div className='card-alignment-containers'>
                        <button onClick={()=>{EditPetHandle(pet.id,pet.name,pet.age,pet.race)}} className='btn btn-primary me-2'>Edit</button>
                        <button onClick={()=> {DeletePetHandle(pet.id)}} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}