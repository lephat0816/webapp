

// ニュースセクションスタイル
export const newsSectionStyles = {

    //　ニュースセクションスタイル
    section: {
        padding: '0 0 60px',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden'
    },
    headingContainer: {
        textAlign: 'center',
        marginBottom: '60px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
    },
    heading: {
        fontSize: {xs: '2.4rem', md: '2.4rem'},
        fontWeight: 600,
        color: '#031A63',
        letterSpacing: '0.1em',
    },
    newsContainer: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 32px',
    },
    separator: {
        width: '100%',
        height: '1px',
        backgroundColor: '#e0e0e0',
        margin: '16px 0'
    },
    moreButtonContainer: {
        textAlign: 'center',
        marginTop: '40px'
    },
    moreButton: {
        backgroundColor: 'transparent',
        color: '#031A63',
        border: '2px solid #031A63',
        padding: '10px 32px',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#031A63',
            color: '#fff'
        }
    },

}