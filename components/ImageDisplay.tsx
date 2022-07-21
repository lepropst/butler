import { ImageList, ImageListItem, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import Theme from "../theming/useTheme";
export type Props = {
    imageURLs: string[];
    label: string;
    height?: number;
    md?: number;
};
export function ImageDisplay(props: Props) {
    const theme = useTheme();
    const myLoader: ImageLoader = (props) => {
        const { src, width, quality } = props;
        return `https://ik.imagekit.io/RoxanneButler/pictures/${src}?w=${width}&q=${
            quality || 75
        }`;
    };
    return (
        <Grid
            item
            xs={12}
            md={props.md ? props.md : 6}
            lg={props.md ? props.md : 6}
            sx={{
                display: "flex",
                flexDirection: "column",
                height: props.height ? props.height : "auto",
                justifyContent: "center",
                "& > ul": {
                    padding: ".25em",
                    border: ".5em solid",
                    borderColor: theme.palette.primary.dark,
                },
                flexFill: 0,
                border: "2px solid theme.pallet.secondary",
            }}
        >
            {/* <Link href={`categoriess/${props.label.toLowerCase()}`}> */}
            <Typography variant="h4">{props.label}</Typography>
            {/* </Link> */}
            <ImageList
                sx={{ width: props.md ? "100%" : "40vw", height: "60vh" }}
                cols={4}
            >
                {props.imageURLs.map((e: string, i: number) => (
                    <ImageListItem key={`${i}-image-dominoes`}>
                        <Image
                            key={`${i}-image-dominoes`}
                            width={250}
                            height={250}
                            src={e}
                            alt={e.split("/").join(" ")}
                            loader={myLoader}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>
    );
}
export default ImageDisplay;
