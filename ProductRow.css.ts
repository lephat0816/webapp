
// 製品行のスタイル

export const productRowStyles = {
    // 行コンテナのスタイル
    row: {
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        position: 'relative',
        marginBottom: '180px',
        alignItems: 'center',
        '&:nth-of-type(even)': {
            flexDirection: {xs: 'column', md: 'row-reserve'},
        }
    },

    // イメージコンテナのスタイル
    imageContainer: {
        position: 'relative',
        width: { sx: '100%', md: '55%'},
        zIndex: 1,
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    },

    image: {

    },
    textContainer: {
        width: {xs: '90%', md: '50%'},
        backgroundColor: 'white',
        padding: '48px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        zIndex: 2,
        marginTop: {xs: '-80px', md: 0},
        position: {xs: 'relative', md: 'relative'},
        marginLeft: {xs: 0, md: '-80px'},
        '.even &': {
            marginLeft: {xs: 0, md: 0},
            marginRight: {xs: 0, md: '-80px'}
        },
        mx: {xs: 'auto', md: 'inherit'}
    },
    title: {
        fontSize: {xs: '2rem', md: '2.4rem'},
        fontWeight: 500,
        color: '#031A63',
        marginBottom: '24px',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: 0,
            width: '80px',
            height: '3px',
            backgroundColor: '#031A63',
        }
    },
    tagline: {
        fontSize: '1.3rem',
        fontWeight: 500,
        color: '#031A63',
        marginBottom: '24px',
        letterSpacing: '0.05em'

    },
    description: {
        color: '#555',
        fontSize: '1.1rem',
        lineHeight: 1.8,
        marginBottom: '32px',
        letterSpacing: '0.02em'
    },
    button: {
        backgroundColor: 'transparent',
        color: '#031A63',
        border: '2px solid #031A63',
        padding: '12px 32px',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        marginTop: '8px',
        '&:hover': {
            backgroundColor: '#031A63',
            color: 'white'
        }
    },
}as const