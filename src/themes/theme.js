import { createTheme } from "@mui/material";
import typography from "./Typography";
import shadows from "./Shadows";
export const tokens = {

  info: {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff',
  },
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
      // light green
      100: "#d0fcf4",
      200: "#a0f9e9",
      300: "#71f5de",
      400: "#41f2d3",
      500: "#12efc8",
      600: "#0ebfa0",
      700: "#0b8f78",
      800: "#076050",
      900: "#043028",
    },
    secondary: {
      // yellow
      100: "#fcf0dd",
      200: "#fae1bb",
      300: "#f7d299",
      400: "#f5c377",
      500: "#f2b455",
      600: "#c29044",
      700: "#916c33",
      800: "#614822",
      900: "#302411",
    },
    tertiary: {
      // purple
      500: "#8884d8",
    },

    greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee",
    },
    redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb",
    },
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe",
    },

    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
const SidebarWidth = 265;
const TopbarHeight = 70;
  // mui theme settings
   const themeSettings  = createTheme({
      direction: "ltr",
      palette: {
        primary: {
          main: "#1a97f5",
          light: "#e6f4ff",
        },
        secondary: {
          main: "#1e4db7",
        },
        background: {
          default: "#fff",
        },
        success: {
          main: "#39cb7f",
          contrastText: "#ffffff",
        },
        danger: {
          main: "#fc4b6c",
        },
        error: {
          main: "#fc4b6c",
        },
        warning: {
          main: "#fdd43f",
          contrastText: "#ffffff",
        },
        text: {
          secondary: "#777e89",
          danger: "#fc4b6c",
        },
      },
      shape: {
        borderRadius: 5,
      },
    
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            "*": {
              boxSizing: "border-box",
            },
            html: {
              height: "100%",
              width: "100%",
            },
            body: {
              height: "100%",
              margin: 0,
              padding: 0,
            },
            "#root": {
              height: "100%",
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              paddingLeft: "15px !important",
              paddingRight: "15px !important",
              maxWidth: "1600px",
            },
          },
        },
    
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            },
          },
        },
    
        MuiListItem: {
          styleOverrides: {
            root: {
              borderRadius: "9px",
            },
          },
        },
    
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: "20px",
              padding: "14px",
              margin: "15px",
            },
          },
        },
    
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              minWidth: "40px",
            },
          },
        },
    
        MuiGridItem: {
          styleOverrides: {
            root: {
              paddingTop: "30px",
              paddingLeft: "30px !important",
            },
          },
        },
      },
      mixins: {
        toolbar: {
          color: "#949db2",
          "@media(min-width:1280px)": {
            minHeight: TopbarHeight,
            padding: "0 30px",
          },
          "@media(max-width:1280px)": {
            minHeight: "64px",
          },
        },
      },
      status: {
        danger: "#e53e3e",
      },
      typography,
      shadows,
    });

    
export { TopbarHeight, SidebarWidth, themeSettings };