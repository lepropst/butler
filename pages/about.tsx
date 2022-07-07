import {
    Box,
    Input,
    InputLabel,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import Axios from "axios";

const initialFormData = {
    fromAddr: "",
    message: "",
    subject: "",
};
export function ContactForm() {
    const [formData, setFormData] =
        useState<typeof initialFormData>(initialFormData);
    const handleDataChange: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };
    const handleSubmit = () => {
        Axios.post("/api/sendEmail", formData)
            .then((response) => alert(response))
            .catch(() => alert("error sending email"));
    };
    return (
        <Box sx={{ width: "80vw", marginLeft: "auto", marginRight: "auto" }}>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>
                    I like to create art. It is the perfect escape, working with
                    everything from resins to paints!
                </Typography>
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                This is where I would like to tell you about me!
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                We can decorate this page however, some stripes across the text.
                Selected background photos, you name it!{" "}
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                The more we write here, in short succint but informative tid
                bits the more engaged your community can become. Providing
                insight or motivation to reach out can be done here
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                Be sure to have some nice things to know about you or your
                causes you stand for to put here. Somethine unique to who you
                are as an artist and what makes your perspective unique.
            </Box>
        </Box>
    );
}
export default ContactForm;
