import './AppointmentCardComponent.css'

export default function AppointmentCardComponent(){


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