import PetCardComponent from "../PetCardComponent/PetCardComponent";
import { useNavigate } from 'react-router-dom'
import './PetReadView.css'

export default function PetReadView(){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pet/create')
    }

    return (
        <>
            <div className='container text-white'>
                <div className="d-flex align-items-center">
                    <h1 className='mb-3 mt-3 me-3'>Pets</h1>
                    <button onClick={handleClick} id="addPetBtn" className="btn btn-success rounded-circle d-flex align-items-center p-1"><img src="/add-symbol.svg" alt="Add" className="img-fluid"/></button>
                </div>
                <PetCardComponent></PetCardComponent>
            </div>
        </>
    )
}