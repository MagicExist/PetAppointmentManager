import PetCardComponent from "../PetCardComponent/PetCardComponent";
import './PetReadView.css'

export default function PetReadView(){

    return (
        <>
            <div className='container text-white'>
                <div className="d-flex align-items-center">
                    <h1 className='mb-3 mt-3 me-3'>Pets</h1>
                    <button id="addPetBtn" className="btn btn-success rounded-circle d-flex align-items-center p-1"><img src="/add-symbol.svg" alt="Add" className="img-fluid"/></button>
                </div>
                <PetCardComponent></PetCardComponent>
            </div>
        </>
    )
}