import { filter } from 'lodash';
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

 export function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  
  export function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }
  

  export function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  