import { filter } from 'lodash';

// ---------
export const TABLE_HEAD = [
    { id: 'Cliente', label: 'Nombre Completo', alignRight: false },
    { id: 'monto  ', label: 'Monto Inicial', alignRight: false },
    { id: 'tasa', label: ' Tasa de interés', alignRight: false },
    { id: 'Fecha', label: 'Fecha de vencimiento', alignRight: false },

    { id: 'status', label: 'Status', alignRight: false },
    { id: 'debt', label: 'Monto Actual', alignRight: false },
 
    { id: '' },
  ];
  /*

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
    */

  export function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
 export  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  export function applySortFilter(array, comparator, query) {
 //   console.log(array)
    const stabilizedThis = array.map((el, index) => [el, index]);
    console.log(stabilizedThis)
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.nameClient.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }

  export const statusLoan = [
    {
        value: 1,
        label: 'Activo',
        
    },
    {
      value: 2,
      label: 'Inactivos',

  },
    {
        value: 3,
        label: 'En proceso',
       
    },
    {
        value: 4,
        label: 'Completados',
  
    },
    {
      value: 5,
      label: 'En Atraso',

  },
]


