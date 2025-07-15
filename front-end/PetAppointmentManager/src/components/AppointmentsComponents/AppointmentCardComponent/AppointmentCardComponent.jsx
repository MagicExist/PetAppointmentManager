import './AppointmentCardComponent.css'
import axios from 'axios'

export default function AppointmentCardComponent(){

    const apiUrl = import.meta.env.VITE_API_URL

    axios.get(`${apiUrl}/appointment`)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.error(err)
        })

    return(
        <div className="card-container">
            <div className="card-header card-alignment">
                <p>Priority</p>
                <p>Pet</p>
                <p>Date</p>
                <p>Time</p>
                <p>Proccedure</p>
                <p>Medic</p>
            </div>
            <div className="card-body card-alignment">
                <p>low</p>
                <p>Max</p>
                <p>10-07-2025</p>
                <p>14:00</p>
                <p>General</p>
                <p>Johhan</p>
            </div>
        </div>
    )
}