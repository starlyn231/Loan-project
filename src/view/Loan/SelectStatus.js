import PropTypes from 'prop-types';
// @mui
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

SelectStatus.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
};

export default function SelectStatus({ options, onSort }) {
  return (
    <TextField select  value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
