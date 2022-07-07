import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const Theme = (mode: string) => {
    console.log(mode);
    return createTheme({
        palette: {
            primary: {
                main: "#73eedc",
                dark: "#065a82",
            },
            secondary: {
                main: "#ffe8d1",
                dark: "#6B6570",
            },
            background: {
                paper: "#FFEEEF",
                default: "#FFF5EB",
            },
            grey: {
                50: "#6e6a6f",
                100: "#6e6a6f",
                200: "#6e6a6f",
                300: "#6e6a6f",
                400: "#6e6a6f",
                500: "#6e6a6f",
                600: "#6e6a6f",
                700: "#6e6a6f",
                800: "#6e6a6f",
                900: "#6e6a6f",
                A100: "#6e6a6f",
                A200: "#6e6a6f",
                A400: "#6e6a6f",
                A700: "#6e6a6f",
            },
            error: {
                main: red.A400,
            },
            divider: "#065a82",
            success: { main: "#1f0322" },
            // {"Turquoise":"","Bisque":"","Blue Sapphire":"065a82","Dark Purple":"1f0322","Dim Gray":"6e6a6f"}
        },
    });
};

export default Theme;
