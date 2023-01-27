import { Fragment, memo } from 'react';
import { Container } from './styles/DatePickerStyles';

//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import MobileDatePicker from '@mui/lab/MobileDatePicker';
import COLORS from '../../themes/Colors';
import { FieldTitle, Row, StyledTextInput } from '../../themes/Styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


function DatePicker({ id, title, placeholder, helperText = " ", value, onChange, onBlur, disabled, error, required }) {
    return (
        <Container>
            <Row>
                <FieldTitle>{title} </FieldTitle>
                <div style={{ width: '5px' }} />
                {required ?
                    <Fragment>
                        <FieldTitle style={{ color: COLORS.red }}>*</FieldTitle>
                    </Fragment>
                    : null}
            </Row>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    id={id}
                    cancelText="Cancelar"
                    okText="Aceptar"
                    toolbarTitle={title}
                    inputFormat='dd/MM/yyyy'
                    renderInput={props => <StyledTextInput {...props} FormHelperTextProps={{ sx: { fontSize: '0.90rem' } }} helperText={helperText} error={error} />}
                    toolbarPlaceholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        onChange({
                            target: {
                                id: id,
                                value: e
                            }
                        })
                    }
                    }
                    inputProps={{ readOnly: true }}
                    onBlur={(e) => {
                        onBlur && onBlur({
                            target: {
                                id: id,
                                value: e
                            }
                        });
                    }
                    }
                    disabled={disabled}
                />
            </LocalizationProvider>
        </Container>
    );
}

export default memo(DatePicker);