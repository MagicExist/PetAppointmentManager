import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AppointmentReadView from './components/AppointmentsComponents/AppointmentReadView/AppointmentReadView'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import PetReadView from './components/PetsComponents/PetReadView/PetReadView';
import PetCreateView from './components/PetsComponents/PetCreateView/PetCreateView';
import PetEditView from './components/PetsComponents/PetEditView/PetEditView';
import AppointmentCreateView from './components/AppointmentsComponents/AppointmentCreateView/AppointmentCreateView';

function App() {

  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element={<AppointmentReadView/>}/>
        <Route path='/appointment/create' element={<AppointmentCreateView/>}/>

        <Route path='/pet' element={<PetReadView/>}/>
        <Route path='/pet/create' element={<PetCreateView/>}/>
        <Route path='/pet/edit/:id' element={<PetEditView/>}/>
      </Routes>
    </Router>
  )
}

export default App
