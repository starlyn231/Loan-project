import { List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import { Menuitems } from '../Mock';
const PaymentsAside = () => {
    return (
        <Box sx={{ width: '80%', }}>
            <Box>
                <List sx={{ mt: 4, }}>
                    {Menuitems.map((item, index) => {
                        return (
                            <List component="li" disablePadding key={item.title}>
                                <ListItem

                                    component={NavLink}
                                    // to={item.href}
                                    // selected={pathDirect === item.href}
                                    sx={{
                                        mb: 1,
                                        backgroundColor: (theme) =>
                                            `${theme.palette.grey[100]}!important`,

                                    }}
                                >
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItem>
                            </List>
                        );
                    })}
                </List>
            </Box>
        </Box>
    )
}

export default PaymentsAside
