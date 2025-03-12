
// 必要なコンポーネント
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { NewsItem, NewsItemProps } from "./NewsItem";
import { newsSectionStyles } from "./NewsSection.css";

// ニュースセクションのプロパティ
interface NewsSectionProps {
    title?: string;
    news: NewsItemProps[];
    maxItems?: number;
}

// ニュースセクションコンポーネント
export const NewsSection = ({
    title = 'NEWS',
    news,
    maxItems = 4,
}: NewsSectionProps) => {
    // 指定された数のニュース項目
    const displayedNews = news.slice(0, maxItems);
    return (
        <Box component='section' sx={newsSectionStyles.section} id="news_section">
            <Container>
                <Box sx={newsSectionStyles.headingContainer}>
                    <Box></Box>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={newsSectionStyles.heading}
                    >
                        {title}
                    </Typography>
                    <Box></Box>
                </Box>
            </Container>
            <Box sx={newsSectionStyles.newsContainer}>
                {/* 各ニュース項目 */}
                {displayedNews.map((item, index) => (
                    <Box key={item.id}>
                        <NewsItem {...item} />
                        {/* 最後の項目以外に区切り線を追加 */}
                        {index < displayedNews.length - 1 && (
                            <Divider sx={newsSectionStyles.separator} />
                        )}
                    </Box>
                ))}

                {/* moreのボタンコンテナ */}
                <Box sx={newsSectionStyles.moreButtonContainer}>
                    <Button
                        component={Link}
                        to="/news"
                        sx={newsSectionStyles.moreButton}
                    >
                        More
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}