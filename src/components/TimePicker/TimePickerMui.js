import { Fragment, memo, useState } from 'react';
import { Container } from './styles/TimePickerStyles';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import MobileTimePicker from '@mui/lab/MobileTimePicker';
import { FieldTitle, Row, StyledTextInput } from '../../themes/Styles';
import COLORS from '../../themes/Colors';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TimePickerMui({ id, title, placeholder, helperText = " ", value, onChange, onBlur, disabled, error, required }) {
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
                <TimePicker
                    sx={{ color: 'blue' }}
                    id={id}
                    cancelText="Cancelar"
                    okText="Aceptar"
                    toolbarTitle={title}
                    renderInput={props => <StyledTextInput  {...props} helperText={helperText} FormHelperTextProps={{ sx: { fontSize: '0.90rem' } }} error={error} />}
                    toolbarPlaceholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        onChange({
                            target: {
                                id: id,
                                value: e
                            }
                        });
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

export default memo(TimePickerMui);