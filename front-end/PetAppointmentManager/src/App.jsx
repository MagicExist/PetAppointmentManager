import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css'
import AppointmentReadView from './components/AppointmentsComponents/AppointmentReadView/AppointmentReadView'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import PetReadView from './components/PetsComponents/PetReadView/PetReadView';
import PetCreateView from './components/PetsComponents/PetCreateView/PetCreateView';
import PetEditView from './components/PetsComponents/PetEditView/PetEditView';
import AppointmentCreateView from './components/AppointmentsComponents/AppointmentCreateView/AppointmentCreateView';
import AppointmentEditView from './components/AppointmentsComponents/AppointmentEditView/AppointmentEditView';
import LoginView from './components/LoginComponents/LoginView/LoginView';
import RegisterView from './components/RegisterComponents/RegisterView/RegisterView';

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
}

const PrivateRoute = () => {
  return isAuthenticated() ? (
    <>
      <NavBarComponent/>
      <Outlet/>
    </>
  ) : <Navigate to="/login" />;
};

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/register' element={<RegisterView/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<AppointmentReadView/>}/>
          <Route path='/appointment/create' element={<AppointmentCreateView/>}/>
          <Route path='/appointment/edit/:id' element={<AppointmentEditView/>}/>

          <Route path='/pet' element={<PetReadView/>}/>
          <Route path='/pet/create' element={<PetCreateView/>}/>
          <Route path='/pet/edit/:id' element={<PetEditView/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
