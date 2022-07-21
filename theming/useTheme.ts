import { createTheme, Palette } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const Theme = (mode: string) => {
    console.log(mode);
    return createTheme({
        palette: {
            primary: {
                main: "#404886",
                dark: "#065a82",
            },
            secondary: {
                main: "#EA5641",
                dark: "#6B6570",
            },
            background: {
                paper: "#FEFFEC",
                default: "#FFFFFF",
            },
            grey: {
                50: "#404886",
                100: "#404886",
                200: "#404886",
                300: "#404886",
                400: "#404886",
                500: "#404886",
                600: "#404886",
                700: "#404886",
                800: "#404886",
                900: "#404886",
                A100: "#404886",
                A200: "#404886",
                A400: "#404886",
                A700: "#404886",
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
