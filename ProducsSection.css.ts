
// 製品セクション全体のスタイル
export const productsSectionStyles = {
    // セクション全体のスタイル
    section: {
        padding: '100px 0 60px',
        backgroundColor: 'f8f9fa',
        position: 'relative',
        overflow: 'hidden'
    },

    // 見出しコンテナのスタイル
    headingContainer: {
        textAlign: 'center',
        marginBottom: '80px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
    },

    // 見出しのスタイル
    heading: {
        fontSize: {xs: '2.4rem', md: '3rem'},
        fontWeight: 700,
        color: '#031a63',
        letterSpacing: '0.1em',
    },

    // 製品リストのコンテナのスタイル
    productsContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 32px',
    },

    rhombus: {
        display: 'inline-block',
        width: '12px',
        height: '12px',
        transform: 'rotate(45deg)',
        backgroundColor: '#031a63',
    },
} as const;