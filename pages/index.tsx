import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import styles from "../styles/Home.module.css";

const dominoesNumImages = 8;
const platesNumImages = 2;
const vaseNumImages = 1;

function constructImageName(base: string, type: string, index: string) {
    return `${base}_${type}_${index}.jpg`;
}
const Home: NextPage = () => {
    const dominoes = [];
    const plates = [];
    const vases = [];
    const images: string[] = [];

    for (let i = 1; i <= dominoesNumImages; i++) {
        const imgName = constructImageName("resin", "dominoes", `0${i}`);
        images.push(`/../public/${imgName}`);
    }
    for (let i = 1; i <= platesNumImages; i++) {
        const imgName = constructImageName("resin", "plate", `0${i}`);
        images.push(`/../public/${imgName}`);
    }
    for (let i = 1; i <= vaseNumImages; i++) {
        const imgName = constructImageName("resin", "vase", `0${i}`);
        images.push(`/../public/${imgName}`);
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Roxanne Butler Art" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                sx={{
                    margin: "2em",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid container>
                    {images.map((e, i) => (
                        <Grid
                            spacing={2}
                            xs={6}
                            md={4}
                            key={`${e}-${i}`}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginY: ".5em",
                            }}
                        >
                            <Image
                                width={250}
                                height={250}
                                src={e}
                                alt={e.split("/").join(" ")}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};
export default Home;
