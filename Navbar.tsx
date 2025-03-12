// 必要なコンポーネントのインポート
import {
    AppBar,
    Container,
    // Typography,
    Button,
    Toolbar,
    useMediaQuery,
    IconButton,
    // Menu,
    // MenuItem,
    Box,
    Drawer,
    List,
    ListItem,
    Typography
} from "@mui/material";

import { Link } from "react-router-dom";
import { navbarStyles } from "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, MouseEvent, useEffect } from "react";

const navLinks = [
    { title: 'ホーム', path: '/' },
    { title: '会社概要', path: '/about' },
    { title: 'プロダクト', path: '/product' },
    { title: 'お問い合わせ', path: '/contact' },
]
// ナビゲーションバーコンポーネント
export const Navbar = () => {

    // モバイル表示の判定
    const isMobile = useMediaQuery('(max-width:600px)');
    // モバイルメニューの状態管理
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    // スクロール状態の管理
    const [scrolled, setCrolled] = useState(false);
    // スクロールイベントリスナー
    useEffect(() => {
        const handleScroll = () => {
            // 100px以上スクロールしたかどうか状態を更新
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setCrolled(isScrolled);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled]);


    // メニュー開閉の処理
    const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget as HTMLElement);
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
    }
    // 現在のスクロール状態に基づいてスタイルを選択
    const currentAppBarStyle = {
        ...navbarStyles.appBar,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.57)' : 'transparent',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
    }
    return (
        <AppBar position="static" sx={currentAppBarStyle}>
            <Container maxWidth="xl" sx={{ padding: 0 }}>
                {' '}
                <Toolbar disableGutters sx={navbarStyles.toolbar}>

                    {/* ロゴ部分 */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            ...navbarStyles.logo,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="src\assets\img\com-icon.jpg"
                            alt="Company Logo"
                            style={{
                                height: '52px',
                                width: 'auto'
                            }}

                        />
                    </Box>

                    <div style={{ flexGrow: 1 }} />

                    {isMobile ? (
                        // モバイル用メニュー
                        <>
                            <IconButton
                                onClick={handleMenuOpen}
                                sx={navbarStyles.mobileMenuIcon}
                            >
                                <MenuIcon fontSize="inherit" />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    sx: navbarStyles.mobileMenuDrawer,
                                }}
                            >
                                {/* 閉じるボタン */}
                                <Box sx={navbarStyles.mobileMenuHeader}>
                                    <IconButton
                                        onClick={handleMenuClose}
                                        sx={navbarStyles.closeButton}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>

                                {/* メニューリスト */}
                                <List sx={navbarStyles.mobileMenuList}>
                                    {navLinks.map((link) => (
                                        <ListItem
                                            key={link.path}
                                            component={Link}
                                            to={link.path}
                                            onClick={handleMenuClose}
                                            sx={navbarStyles.mobileMenuItem}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={navbarStyles.mobileMenuItemText}
                                            >
                                                {link.title}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        navLinks.map((link) => (
                            <Button
                                key={link.path}
                                component={Link}
                                to={link.path}
                                sx={navbarStyles.menuButton}
                            >
                                {link.title}
                            </Button>
                        ))
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
