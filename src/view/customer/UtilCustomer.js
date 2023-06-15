import { filter } from 'lodash';

// ---------
export const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'cedula', label: 'Cedula', alignRight: false },
    { id: 'lastName', label: 'Apellido', alignRight: false },
    { id: 'company', label: 'Empleo', alignRight: false },
    { id: 'role', label: 'Role', alignRight: false },
    { id: 'phone', label: 'Telefono', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' },
  ];

  export function checkObject(listCustomers) {

    // check if arr is array
    const result = Array.isArray(eventsData);
    setTimeout(() => {
   
  
  
    if(result) {
        console.log(`[${eventsData}] is an array.`);
    }
    else {
        console.log(`${eventsData} is not an array.`);
    }
  }, 5000);
  }
    