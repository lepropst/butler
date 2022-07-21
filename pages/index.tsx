import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image, { ImageLoader } from "next/image";
import path from "path";
import generateImageURL from "../components/generateImageURL";
import ImageDisplay from "../components/ImageDisplay";
import styles from "../styles/Home.module.css";

const lengths: { [key: string]: any } = {
    dominoes: 8,
    plates: 2,
    vases: 1,
    ticTacToe: 1,
    keychains: 25,
};

const Home: NextPage = () => {
    let images: {
        dominoes: string[];
        plates: string[];
        vases: string[];
        ticTacToe: string[];
        keyChains: string[];
    } = {
        dominoes: [],
        plates: [],
        vases: [],
        ticTacToe: [],
        keyChains: [],
    };

    images.dominoes = generateImageURL(
        "dominoes",
        "dominoes",
        lengths.dominoes,
        "resin_"
    );
    images.vases = generateImageURL("vases", "vase", lengths.vases, "resin_");
    images.plates = generateImageURL(
        "plates",
        "plate",
        lengths.plates,
        "resin_"
    );
    images.ticTacToe = generateImageURL(
        "tictactoe",
        "tictactoe",
        lengths.ticTacToe,
        "resin_"
    );
    images.keyChains = generateImageURL(
        "keychains",
        "keychain",
        lengths.keychains
    );

    console.log(images);
    const { dominoes, plates, vases, keyChains, ticTacToe } = images;
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Roxanne Butler Art" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid container spacing={2} justifyContent={"center"}>
                <ImageDisplay imageURLs={dominoes} label={"Dominoes"} />
                <ImageDisplay imageURLs={plates} label={"Plates"} />
                <ImageDisplay imageURLs={vases} label={"Vases"} />
                <ImageDisplay imageURLs={ticTacToe} label={"Tic Tac Toe"} />
                <ImageDisplay
                    md={10}
                    height={800}
                    imageURLs={keyChains}
                    label={"Key Chains"}
                />
            </Grid>
        </div>
    );
};
export default Home;
