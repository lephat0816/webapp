
// 必要なコンポーネント
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { productRowStyles } from "./ProductRow.css";

// 製品情報の型定義
export interface ProductRowProps {
    id: string;
    title: string;
    description: string;
    tagline: string;
    backgroundImage: string;
    externalLink?: string;
    isEven: boolean;
}

// 製品行コンポーネント
export const ProductRow = ({
    id,
    title,
    description,
    tagline,
    backgroundImage,
    externalLink,
    isEven
}: ProductRowProps) => {
    // リンク先の決定
    const linkTo = externalLink || `/product/${id}`;

    return(
        <Box
            sx={productRowStyles.row}
            className={isEven ? 'even' : 'odd'}
        >
            {/* 画像コンテナ */}
            <Box sx={productRowStyles.imageContainer}>
                <img 
                    src={backgroundImage}
                    alt={title}
                    style={productRowStyles.image}
                    width='110%'
                />
            </Box>

            {/* テキストコンテナ */}
            <Box sx={productRowStyles.textContainer}>
                {/* 製品タイトル */}
                <Typography variant="h3" sx={productRowStyles.title}>
                    {title}
                </Typography>

                {/* 製品タグライン */}
                <Typography variant="body1" sx={productRowStyles.tagline}>
                    {tagline}
                </Typography>

                {/* 製品説明 */}
                <Typography variant="body2" sx={productRowStyles.description}>
                    {description}
                </Typography>

                {/* 詳細ボタン */}
                {externalLink ? (
                    <Button
                        component='a'
                        href={linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={productRowStyles.button}
                    >
                        詳細を見る
                    </Button>
                ) : (
                    <Button
                        component={Link}
                        to={linkTo}
                        sx={productRowStyles.button}
                    >
                        詳細を見る
                    </Button>
                )}
            </Box>
        </Box>
    );
};