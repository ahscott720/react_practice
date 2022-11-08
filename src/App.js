import './index.css';
import Employee from "./components/Employees"
import { useState } from 'react';



function App() {
  const [employees, setEmployees] = useState([
    { 
      id: 1,
      name: "Tiger",
      role: "self-employeer",
      img: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg"
    },
    { 
      id: 2,
      name: "Lion",
      role: "Large head",
      img: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
    },
    { 
      id: 3,
      name: "Ostrich",
      role: "employee",
      img: "https://images.pexels.com/photos/752035/pexels-photo-752035.jpeg"
    },
    { 
      id: 4,
      name: "Donkey",
      role: "employee",
      img: "https://images.pexels.com/photos/13574638/pexels-photo-13574638.jpeg"
    },
  ])
  return (
    <>
    <div className='flex flex-wrap'>
      {employees.map((employee) => {
        return (
          <Employee 
          key={employee.id}
          name={employee.name}
          role={employee.role}
          img={employee.img}
          />
        )

      })}

    </div>
    </>
  );
}

export default App;
