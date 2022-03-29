import { createTheme } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    palette: {
        primary: {
            main: "#6a1b9a",
            light: "#9c4dcc",
            dark: "#38006b"
        },
        secondary: {
            main: "#fafafa",
            light: "#ffffff",
            dark: "#c7c7c7"
        }
    },
    transitions: {
        easing: {
            easeIn: "0.3s ease"
        }
    }
});

export default theme;