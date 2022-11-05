import { useState, useRef, memo, useEffect } from 'react';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { Avatar, useMediaQuery } from '@mui/material';
import { Container, IconUser, StyledPaper } from './style/UserLoggedMenuStyles';
//import { useAuth } from '../../Context/AuthProvider';


function UserLoggedMenu({ image }) {
  // const { token, onLogout } = useAuth();

  const matchesWidth = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);
  const [userImage, setUserImage] = useState("");

  const containerRef = useRef(null);

  const handleHovering = (hoverState) => {
    setHover(hoverState);
  }

  const HandleLogOut = () => {
    let deleteLocalStorage;

    setTimeout(() => {

      deleteLocalStorage = window.localStorage.removeItem("persist:root")?.user;
      window.location.reload();

    }, 1500);
  }



  return (
    <Container ref={containerRef}
      onMouseOver={() => handleHovering(true)} onMouseOut={() => handleHovering(false)}>
      <Avatar src="/broken-image.jpg" />

      <Popper
        style={{ zIndex: 999999999999 }}
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
                <MenuItem onClick={() => navigate('/login')}>Configuracion</MenuItem>



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

export default memo(UserLoggedMenu);