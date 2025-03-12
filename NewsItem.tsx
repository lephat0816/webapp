
// 必要なコンポーネント
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { newsItemStyles } from "./NewsItem.css";


// ニュース項目のプロパティ
export interface NewsItemProps {
    id: string;
    title: string;
    date: string;
    link: string;
}

// ニュース項目コンポーネント
export const NewsItem = ({
    title,
    date,
    link
}: NewsItemProps) => {
    return (
        <Box sx={newsItemStyles.item}>
            {/* 日付 */}
            <Typography variant="body2" sx={newsItemStyles.date}>
                {date}
            </Typography>
            {/* タイトルとリンク */}
            <Typography
                component={Link}
                to={link}
                variant="body1"
                sx={newsItemStyles.title}
            >
                {title}
            </Typography>
        </Box>
    )
}