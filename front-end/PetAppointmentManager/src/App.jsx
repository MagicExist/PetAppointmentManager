import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AppointmentReadView from './components/AppointmentsComponents/AppointmentReadView/AppointmentReadView'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import PetReadView from './components/PetsComponents/PetReadView/PetReadView';
import PetCreateView from './components/PetsComponents/PetCreateView/PetCreateView';

function App() {

  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element={<AppointmentReadView/>}/>
        <Route path='/pet' element={<PetReadView/>}/>
        <Route path='/pet/create' element={<PetCreateView/>}/>
      </Routes>
    </Router>
  )
}

export default App
