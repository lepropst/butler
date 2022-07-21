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
import Head from "next/head";

const initialFormData = {
    fromAddr: "",
    message: "",
    subject: "",
};
export function About() {
    return (
        <Box sx={{ width: "80vw", marginLeft: "auto", marginRight: "auto" }}>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello I’m Roxanne a retired
                    Special needs teacher of 30 years. I began painting 8 years
                    ago as a relaxer. I would find various pieces of furniture
                    on the curb and paint them very whimsically. Since starting
                    with furniture I decided to paint with acrylic on canvas.
                    Found out that people liked my paintings and began to sell
                    them to family and friends.
                </Typography>
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In these 8 years I have begun
                    to use resin, acrylic and a stain gel called Unicorn Spit. I
                    enjoy doing what is called “dirty pours” on canvas; well,
                    really any type of material from metal to glass to wood. I
                    love using molds for my resin. Making key chains, dominos,
                    trinket bowls and much more.
                </Typography>{" "}
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’ve done custom work also.
                    I’ve made cow skulls with semi-precious stones then sealed
                    in resin, a ram skull decorated with flowers made out of
                    wooden flowers to a dirty pour on a 5ft by 5ft canvas.
                </Typography>
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>
                    If you need a charcuterie board I can custom make them too.
                </Typography>
            </Box>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography>Categories and pricing Glass plates.</Typography>
                <ul>
                    <li>Small. $10. </li> <li> Large $20</li>
                </ul>
                <ul>
                    <li> Dominoes. $35. </li>
                    <li> Custom $45-50. </li>
                    <li style={{ marginLeft: "4em" }}>
                        depending on materials used
                    </li>
                    <li> Key chains $7 </li>
                    <li> Stubby stabbed key chains $10 </li>
                    <li> Weed leaf ash</li>
                    <li> trays $25 </li>
                    <li> Trivet boxes $10 </li>
                    <li> Cutting boards /charcuterie</li>
                    <li> boards $20-180 </li>
                    <li style={{ marginLeft: "4em" }}>
                        depending on materials use and size Home
                    </li>
                    <li> décor clocks. $30</li>
                    <li>
                        Wall décor signs. $5 and up depending on materials and
                        size
                    </li>
                    <li> Large cancel sticks. $45</li>
                    <li> Glass bowl on stand. $35</li>
                    <li> Metal stands. $15</li>
                    <li>Cow skull covered with tiger eye stones. $150</li>
                    <li> Cow skull painted with Unicorn Spit. $100</li>
                    <li>Ram skull decorated with wooden flowers. $85</li>
                    <li> Serving tray $45</li>
                    <li> Crosses. $10</li>
                    <li> Glass vase. $37</li>
                    <li> Small Wooden trays. $5</li>
                    <li> Paper machete deer head. $25</li>
                    <li> Stand up clock. $45</li>
                </ul>
            </Box>
        </Box>
    );
}
export default About;
