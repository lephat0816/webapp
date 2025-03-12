
// ニュース項目スタイル
export const newsItemStyles = {
    // ニュース項目コンテナ
    item: {
        padding: '16px 0',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: '16px',
    },
    date: {
        color: '#031A63',
        fontSize: '1rem',
        fontWeight: 500,
        minWidth: '120px',
    },
    title: {
        fontSize: '1.1rem',
        color: '#031A63',
        flexGrow: 1,
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#0056B3'
        }
    },

}