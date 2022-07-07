import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { MouseEventHandler, useReducer, useRef } from "react";
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
    const [formData, dispatchFormData] = useReducer(
        (
            state: typeof initialReducerState,
            action: { type: 1 | 2 | 3; payload: string }
        ) => {
            const tmpState = state;
            switch (action.type) {
                case 1:
                    return { ...tmpState, from: action.payload };
                case 2:
                    return state;
                case 3:
                    return { ...tmpState, body: action.payload };
                default:
                    return tmpState;
            }
        },
        initialReducerState
    );
    const emailRef = useRef<HTMLAnchorElement>(null);
    const emailClickHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        const el = emailRef.current;
        if (!el) {
            return null;
        } else {
            navigator.clipboard.writeText(emailText);
            alert("Copied the text: " + emailText);
            return true;
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <EmailLink onClick={emailClickHandler}>
                        {emailText}
                    </EmailLink>
                </Item>
            </Grid>
            <Grid item xs={12}>
                You can email us at the above address, or submit a form directly
                here! They both go to the same place.
            </Grid>
            <Grid xs={12} item>
                <Item>
                    <ContactForm />
                </Item>
            </Grid>
        </Grid>
    );
};

export default Contact;
