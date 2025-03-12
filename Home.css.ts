// ホームページスタイル
export const homeStyles = {
    // ヒーローセクションのスタイル設定
    hero: {
        backgroundImage: "url(src/assets/img/header-background.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: "#ffffff",
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: "100px 0",
        textAlign: "center",
        position: "relative",
        paddingTop: '74px',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
        },
        '& h1, & h2': {
            position: 'relative',
            zIndex: 2
        },

        "& h1": {
            fontSize: {
                xs: '36px',
                md: '48px'
            },
            marginBottom: "16px",
            fontWeight: 600
        },
        "& h2": {
            fontSize: {
                xs: '18px',
                md: '24px'
            },
            marginBottom: "32px",
            fontWeight: 400,
        },
    },
    // 特徴セクションをグリッドレイアウトに更新
    features: {
        padding: "64px 0",
        // textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto"
    },

    // 特徴グリッドのスタイル
    featureGrid: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: '32px',
        marginBottom: '48px'
    },

    // 個別の特徴項目のスタイル
    feature: {
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
        },

        "& h3": {
            fontSize: "24px",
            marginBottom: "16px",
            fontWeight: 500,
            color: '#1976d2'
        },
        "& p": {
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#666666"
        },
    },

    button: {
        fontSize: "16px",
        padding: "12px 32px",
        borderRadius: "4px",
        backgroundColor: "#1976d2",
        color: "#ffffff",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#1565c0"
        }
    },
    sliderContainer: {

    },
    slide: {

    },
    overlay: {

    },
    heroContent: {
        position: 'absolute',
        bottom: '80px',
        left: '80px',
        zIndex: 4,
        textAlign: 'left',
        maxWidth: '600px'
    },
    heroText: {
        color: '#ffffff',
        fontSize: { xs: '32px', md: '52px' },
        fontWeight: 500,
        lineHeight: 1.6,
        marginBottom: '24px',
        whiteSpace: 'pre-line',
        textShadow: '0 0 8px rgba(0,0,0,0.3)',
    },
    heroButton: {
        background: 'transparent',
        color: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '4px',
        padding: '10px 24px',
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        boxShadow: '0 0 10px rgba(255,255,255,0.6)',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 0 15px rgba(255,255,255,0.8)',
            background: 'rgba(255,255,255,0.1)'
        }

    }
} as const