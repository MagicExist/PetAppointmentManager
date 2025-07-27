# 🌐Project Host Url

- https://front-production-1fcc.up.railway.app/

# 🐾 Pet Appointment Manager

A full-stack **CRUD application** to manage pets and their appointments.  
This project is built with:

- 🖥️ **Frontend:** React.js
- 🐍 **Backend:** Django REST Framework

## 🚀 Features

- ✅ Create, read, update, and delete **Pets**
- ✅ Create, read, update, and delete **Appointments** linked to Pets
- ✅ Seamless interaction between frontend and backend APIs

---

## 📁 Project Structure

- /back-end => Django REST API
- /front-end => React.js application

---

## ⚙️ Getting Started

### 🐍 Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd back-end
   ```
2. (Optional but recommended) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Unix
   venv\Scripts\activate      # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply migrations:
   ```bash
   cd ./PetAppointmentManagerApi
   python manage.py migrate
   ```
5. Run the backend server:
   ```bash
   python manage.py runserver
   ```
6. The API will be available at:
   http://127.0.0.1:8000/api/

## ⚛️ Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd front-end
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. 🔐 Environment Variables
Create a `.env` file in the **front-end/PetAppointmentManager** folder with the following content:
```
VITE_API_URL=http://127.0.0.1:8000/api
#This variable is used to connect the React frontend to the Django backend API.
```

4. Start the React development server:
   ```bash
   npm install (in PetAppointmentManager Folder)
   npm run dev
   ```

5. The React app will run at:http://127.0.0.1:5173/


   
