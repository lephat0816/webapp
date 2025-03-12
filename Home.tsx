import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { homeStyles } from "./Home.css";
import { useEffect, useState } from "react";
// アイコンのインポート追加
// import BusinessIcon from '@mui/icons-material/Business';
// import StarIcon from '@mui/icons-material/Star';

// productコンポーネント
import { ProductsSection } from "../Product/ProductsSection";

import { NewsSection } from "../../components/news/NewsSection";
import { newsData } from "../../data/newsData";



// 背景画像の配列
const backgroundImages = [
    'src/assets/img/img_001.jpg',
    'src/assets/img/img_002.png',
    'src/assets/img/img_003.jpg'
];
// 製品データの定義
export const productData = [
    {
        id: 'tascol',
        title: 'TASCOL',
        description: 'コンタクトレンズ販売店が、コンタクトレンズおよびケア用品を販売するための支援システムです。販売管理から在庫管理まで幅広くサポートし、業務効率化を実現します。',
        tagline: 'コンタクトレンズ販売管理システム',
        backgroundImage: backgroundImages[0],
        logoImage: 'src/assets/img/tascol_logo2.jpg',
        externalLink: './product/tascol'
    },
    {
        id: 'vegean',
        title: 'ベジあん',
        description: '農作物を安全・安心に消費者の方に届けることを念頭に置き開発された生産履歴開示システムです。栽培過程の透明性を高め、消費者と生産者の信頼関係構築に貢献します。',
        tagline: '生産履歴開示システム',
        backgroundImage: backgroundImages[1],
        logoImage: 'src/assets/img/one_point3.png',
        externalLink: './product/vegean'
    }, {
        id: 'gapvegean',
        title: 'GAP版ベジあん',
        description: 'GAPに取り組む農家さんを、GAP認証取得.維持などでサポートする生産履歴開示システムです。国際水準の農業生産工程管理に対応し、持続可能な農業をサポートします。',
        tagline: '生産履歴開示システム',
        backgroundImage: backgroundImages[2],
        logoImage: 'src/assets/img/android-icon-192x192.png',
        externalLink: 'https://www.vegean.jp/index.html'
    },
]

// 特徴セクションのデータを拡張
export const Home = () => {
    // 現在の画像と次の画像のインデックス
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    // スライドアニメーション状態
    const [isSliding, setIsSliding] = useState(false);
    // アニメーション時間
    const animationDuration = 1500;
    const nextSlide = () => {
        if (isSliding) return;
        const next = (currentIndex + 1) % backgroundImages.length;
        setNextIndex(next);
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex(next);
            setNextIndex((next + 1) % backgroundImages.length);
            setIsSliding(false);
        }, animationDuration);
    }

    // 現在の画像インデックスを管理するstate
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);
        return () => clearInterval(intervalId);
    })

    // 7秒ごとに自動スライド
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);

        // アンマウント時にタイマーをクリア
        return () => clearInterval(timer)
    }, [isSliding]);

    const currentHeroStyle = {
        ...homeStyles.hero,
        backgroundImage: `url("${backgroundImages[currentImageIndex]}")`
    }

    return (

        <Box component="main">

            {/* スライダーコンテナ */}
            <Box sx={homeStyles.sliderContainer}>
                <Box
                    sx={{
                        ...homeStyles.slide,
                        backgroundImage: `url(${backgroundImages[nextIndex]})`,
                        zIndex: 1,
                        // height: '300px'
                    }}
                />

                <Box
                    sx={{
                        ...homeStyles.slide,
                        backgroundImage: `url(${backgroundImages[currentIndex]})`,
                        transform: isSliding ? 'translateX(100%)' : 'translateX(0)',
                        trasition: isSliding ? `transform ${animationDuration}ms ease` : 'none',
                        zIndex: 2,
                        // height: '300px'
                    }}
                />
                <Box sx={homeStyles.overlay} />
            </Box>

            {/* メインビジュアル */}
            <Box sx={currentHeroStyle}>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '12px',
                            mt: 4,
                            position: 'relative',
                            zIndex: 2,
                            opacity: 0
                        }}
                        className='fade-in fade-in-3'
                    >
                        {backgroundImages.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                sx={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            />
                        ))}
                    </Box>
                    <Box sx={homeStyles.heroContent}>
                        <Typography sx={homeStyles.heroText}>
                            {"信頼を大切に\nソフトウェア全般で\n社会に貢献します。"}
                        </Typography>
                        <Button
                            component={Link}
                            to="/about"
                            sx={homeStyles.heroButton}
                        >
                            COMPANY
                        </Button>
                    </Box>
                </Container>
            </Box>
            {/* 製品セクション */}
            <ProductsSection title="PRODUCT" products={productData} />

            {/* ニュースセクション */}
            <NewsSection title="NEWS" news={newsData} />
        </Box>


    )
}