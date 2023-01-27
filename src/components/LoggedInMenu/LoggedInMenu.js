import { useState, useRef, memo, useEffect } from 'react';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';


import {
    Container, StyledPaper, UserImage,
} from './styles/LoggedInMenuStyles';
import { useSelector } from 'react-redux';
//import LocalStorageService from '../../services/LocalStorageService';
//import { removeLocalStorageSessionData } from '../../auth/AuthFunctions';
import img from '../../assets/image/unsplash.png'
function LoggedInMenu({ image }) {


    const [hover, setHover] = useState(false);
    // const [userImage, setUserImage] = useState("");

    const containerRef = useRef(null);

    const handleHovering = (hoverState) => {
        setHover(hoverState);
    }

    const HandleLogOut = () => {
        //dispatch(ShowGlobalLoading('Cerrando sesión'));
        //TO MAKE AN LOGOUT USER EXPERIENCE
        setTimeout(() => {
            // removeLocalStorageSessionData();
            // dispatch(AuthLogout());
            window.location.reload();
            //   dispatch(HideGlobalLoading());
        }, 1500);
    }

    useEffect(() => {
        // setUserImage(LocalStorageService.getItem('profile_img'));
    }, []);

    return (
        <Container ref={containerRef}
            onMouseOver={() => handleHovering(true)} onMouseOut={() => handleHovering(false)}>
            <UserImage src={img} />
            <Popper
                open={hover}
                anchorEl={containerRef.current}
                role={undefined}
                placement='bottom-end'
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                'right top',
                        }}
                    >
                        <StyledPaper>
                            <MenuList>
                                <MenuItem >Mi configuración</MenuItem>
                                <Divider sx={{ width: '100%' }} />
                                <MenuItem onClick={HandleLogOut}>Cerrar sesión</MenuItem>
                            </MenuList>
                        </StyledPaper>
                    </Grow>
                )}
            </Popper>
        </Container >
    );
}

export default memo(LoggedInMenu);