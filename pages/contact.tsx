import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ContactForm from "../components/contact-form";
import type { NextPage } from "next";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: "1em",
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const EmailLink = styled(Typography)(({ theme }) => ({
    ...theme.typography.h5,
    "&:hover": {
        textDecoration: "underline",
    },
}));
const emailText = "twins4u6969@gmail.com";
const initialReducerState = { from: "", to: emailText, body: "" };
export const Contact: NextPage = () => {
    return (
        <Container>
            <ContactForm />
        </Container>
    );
};

export default Contact;
