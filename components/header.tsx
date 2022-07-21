import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const LINKS = ["Home", "About", "Contact"];
import Theme from "../theming/useTheme";
const theme = Theme("light");

export function Header() {
    const [visible, setVisible] = useState(true);
    const [oldScroll, setOldScroll] = useState(0);
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY > oldScroll) {
            }
            if (window.scrollY <= oldScroll) {
                setVisible(true);
            }
            setOldScroll(window.scrollY);
        });
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                transition: "2ms",
                height: "10vh",
                width: "100%",
                background: theme.palette.background.paper,

                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                left: 0,
                right: 0,
                top: 0,
                zIndex: 2000,
            }}
        >
            {LINKS.map((e, i) => {
                return (
                    <Box
                        sx={{
                            marginX: "1em",
                        }}
                        key={`${e}-${i}`}
                    >
                        <Link
                            href={e.toLowerCase()}
                            style={{ textDecoration: "none" }}
                        >
                            <Typography
                                sx={{
                                    textDecoration: "none",

                                    "&:hover": {
                                        color: theme.palette.secondary.main,
                                        textDecoration: "underline",
                                        textDecorationColor:
                                            theme.palette.primary.main,
                                    },
                                }}
                            >
                                {e}
                            </Typography>
                        </Link>
                    </Box>
                );
            })}
        </Box>
    );
}
