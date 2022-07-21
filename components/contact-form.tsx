import {
    Box,
    Input,
    InputLabel,
    TextareaAutosize,
    TextField,
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
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                <TextField
                    id="fromAddr"
                    value={formData.fromAddr}
                    onChange={handleDataChange}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="subject"
                    value={formData.subject}
                    onChange={handleDataChange}
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                <TextareaAutosize
                    aria-label="Message"
                    id="message"
                    value={formData.message}
                    onChange={handleDataChange}
                    minRows={10}
                    style={{ width: "100%" }}
                    placeholder="Message"
                />
            </Box>
            <Box
                component="button"
                formAction="submit"
                sx={{
                    margin: ".25em",
                    border: "1px solid black",
                    background: "none",
                    shadow: "none",
                }}
            >
                Submit
            </Box>
        </Box>
    );
}
export default ContactForm;
