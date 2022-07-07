import { Box, Link, Typography } from "@mui/material";
const LINKS = ["Home", "About", "Contact"];
import Theme from "../theming/useTheme";
const theme = Theme("light");
export function Header() {
    return (
        <Box
            sx={{
                height: "10vh",
                width: "100%",
                background: theme.palette.background.paper,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid red",
            }}
        >
            {LINKS.map((e, i) => {
                return (
                    <Box sx={{ marginX: "1em" }} key={`${e}-${i}`}>
                        <Link href={e.toLowerCase()}>
                            <Typography>{e}</Typography>
                        </Link>
                    </Box>
                );
            })}
        </Box>
    );
}
