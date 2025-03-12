
// 必要なコンポーネント
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { aboutItemsStyles } from "./AboutItem.css";

export interface AboutItemProps {
    id: string;
    title: string;
    content: string;
    address?: Array<string>;
}
// export const AboutItem = ({
//     id,
//     title,
//     content
// }: AboutItemProps) => {
//     return (
       
//     )
// }

export const AboutItem = ({id, title, content}: AboutItemProps) => {
    return(
        <Box>
            <Typography variant="body2">
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Box>
    )
}