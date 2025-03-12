// フッターコンポーネント
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { footerStyles } from "./Footer.css";

// フッターリンク
const footerLinks = [
    { title: "プライバシー", path: "/privacy" },
    { title: "お問い合わせ", path: "/contact" }
]

export const Footer = () => {

    return (
        <Box component="footer" sx={footerStyles.footer}>
            <Container>

                {/* 会社情報 */}
                <Typography variant="body2">
                    〒690-0045{'　'} 島根県松江市乃白町334番地6 のしらスイートビル2F
                </Typography>

                {/* フッターリンク */}
                <Box sx={footerStyles.links}>
                    {footerLinks.map(link => (
                        <MuiLink
                            key={link.path}
                            component={Link}
                            to={link.path}
                        >
                            {link.title}
                        </MuiLink>
                    ))}
                </Box>

                {/* コピーライト */}
                <Typography variant="body2" align="center">
                    © 2018  AcuteSysCom Ltd. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    )
}