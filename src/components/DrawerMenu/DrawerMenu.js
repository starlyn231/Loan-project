import { useState, Fragment, useEffect } from "react";
import {
    Container,
    MenuButton,
    DrawerList,
    DrawerListItemButton,
    DrawerListItemContainer,
    ProfileImage,
    StyledDrawer
} from "./styles/DrawerMenuStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
//import { HideGlobalLoading, ShowGlobalLoading } from "../../redux/actions/UiActions";
//import { AuthLogout } from "../../redux/actions/AuthActions";
//import LocalStorageService from "../../services/LocalStorageService";
//import { removeLocalStorageSessionData } from "../../auth/AuthFunctions";
import { useNavigate } from "react-router-dom";
import ImportantInformationModal from "../ImportantInformationModal/ImportantInformationModal";

function DrawerMenu() {
    const matchesWidth = useMediaQuery("(min-width:768px)");

    const navigation = useNavigate();
    const dispatch = useDispatch();
    //  const { authenticated } = useSelector((state) => state.authReducer);
    const authenticated = false;
    const [drawerState, setDrawerState] = useState(false);
    const [registerInformationModalVisible, setRegisterInformationModalVisible] = useState(false);
    const [userImage, setUserImage] = useState("");


    const goToRoute = (route) => {
        setDrawerState(false);
        navigation(route);
    };

    const handleregisterInformationModalVisibility = () => {
        setRegisterInformationModalVisible(!registerInformationModalVisible);
    };

    const HandleLogOut = () => {
        // dispatch(ShowGlobalLoading('Cerrando sesión'));
        setTimeout(() => { //TO MAKE AN LOGOUT USER EXPERIENCE
            //  removeLocalStorageSessionData();
            //  dispatch(AuthLogout());
            window.location.reload();
            //   dispatch(HideGlobalLoading());
        }, 1500);

    }

    /* useEffect(() => {
         setUserImage(LocalStorageService.getItem('profile_img'));
     }, []);*/

    return (
        <Container >
            {isMobile &&
                <ImportantInformationModal
                    open={registerInformationModalVisible}
                    buttonTitle='Ir a la store'
                    content='Para tener una mejor experiencia instale la app mitur.'
                    buttonClick={() => goToRoute("/app/register")} //SEND TO DOWNLOAD APP LINK
                    onCloseClick={handleregisterInformationModalVisibility}
                    onBackDropClick={handleregisterInformationModalVisibility}
                />
            }

            <MenuButton
                color='inherit'
                startIcon={<MenuIcon style={{ fontSize: "40px" }} />}
                name='drawerState'
                onClick={() => setDrawerState(!drawerState)}

            />
            <StyledDrawer
                anchor={"right"}
                open={drawerState}
                onClose={() => setDrawerState(!drawerState)}

            >
                {authenticated && <ProfileImage src={userImage} />}
                <DrawerList>
                    <DrawerListItemContainer>
                        <DrawerListItemButton
                            color='inherit'
                            onClick={() => goToRoute("/public")}
                        >
                            CALENDARIO
                        </DrawerListItemButton>
                    </DrawerListItemContainer>
                    <DrawerListItemContainer >
                        <DrawerListItemButton
                            color='inherit'
                            onClick={() => goToRoute("/app/listOfServices/0")}
                        >
                            BOLETOS
                        </DrawerListItemButton>
                    </DrawerListItemContainer>

                    <DrawerListItemContainer >
                        <DrawerListItemButton
                            color='inherit'
                            onClick={() => goToRoute("/app/contact")}
                        >
                            CONTACTOS
                        </DrawerListItemButton>
                    </DrawerListItemContainer>
                    {!authenticated ?
                        <Fragment>
                            <DrawerListItemContainer>
                                <DrawerListItemButton
                                    color='inherit'
                                    onClick={() => goToRoute("/login")}
                                >
                                    INICIAR SESIÓN
                                </DrawerListItemButton>
                            </DrawerListItemContainer>
                            <DrawerListItemContainer >
                                <DrawerListItemButton
                                    color='inherit'
                                    onClick={(e) => {
                                        isMobile
                                            ? handleregisterInformationModalVisibility()
                                            : goToRoute("/app/register");
                                    }}
                                >
                                    REGISTRAR
                                </DrawerListItemButton>
                            </DrawerListItemContainer>
                        </Fragment>
                        :
                        <Fragment>
                            <DrawerListItemContainer >
                                <DrawerListItemButton
                                    color='inherit'
                                    onClick={() => goToRoute("/app/myDesk")}
                                >
                                    CARRITO
                                </DrawerListItemButton>
                            </DrawerListItemContainer>

                            <DrawerListItemContainer >
                                <DrawerListItemButton
                                    color='inherit'
                                    onClick={() => goToRoute("/app/myConfiguration")}
                                >
                                    Mi configuracion
                                </DrawerListItemButton>
                            </DrawerListItemContainer>
                        </Fragment>
                    }
                </DrawerList>
                {
                    authenticated &&
                    <div>
                        <DrawerListItemContainer >
                            <DrawerListItemButton
                                color='inherit'
                                onClick={HandleLogOut}
                            >
                                Cerrar sesión
                            </DrawerListItemButton>
                        </DrawerListItemContainer>
                    </div>
                }
            </StyledDrawer>
        </Container>
    );
}

export default DrawerMenu;
