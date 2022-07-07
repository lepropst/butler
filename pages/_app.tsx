import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import Theme from "../theming/useTheme";
import createEmotionCache from "../theming/createEmotionCache";
import { Header } from "../components";
import { Box } from "@mui/material";
// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();
const theme = Theme("light");
export default function MyApp(props: any) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant,
        consistent, and simple baseline to
        build upon. */}

                <CssBaseline />
                <Box
                    sx={{
                        position: "static",
                        margin: 0,
                        padding: 0,
                        border: "1px solid blue",
                    }}
                >
                    <Header />

                    <Component {...pageProps} />
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
