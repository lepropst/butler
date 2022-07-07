import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Roxanne Butler Art" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                sx={{
                    margin: "3em",
                    height: "800vh",
                    border: "1px solid black",
                }}
            ></Box>
        </div>
    );
};

export default Home;
