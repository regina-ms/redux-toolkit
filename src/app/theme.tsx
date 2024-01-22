import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";



export const myTheme = createTheme({
    typography: {
        fontFamily: 'Rubik',
    },
    palette: {
        primary: {
            main: pink[500],
        },
        text: {
            primary: '#616161',
            
        }
        
    },

})