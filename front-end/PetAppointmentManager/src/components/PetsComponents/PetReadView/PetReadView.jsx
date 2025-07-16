import PetCardComponent from "../PetCardComponent/PetCardComponent";


export default function PetReadView(){

    return (
        <>
            <div className='container text-white'>
                <h1 className='mb-3 mt-3'>Pets</h1>
                <PetCardComponent></PetCardComponent>
            </div>
        </>
    )
}