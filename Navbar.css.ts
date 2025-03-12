// ナビゲーションバースタイル
export const navbarStyles = {
    // ナビゲーションバー全体のスタイル
    appBar: {
        backgroundColor: "#ffffff",
        color: "#333333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000
    },

    // ツールバーのスタイル
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: {xs: '0 0 0 8px', md: '0 0 0 16px'}
    },

    // ロゴのスタイル
    logo: {
        marginRight: 'auto',
        paddingLeft: 0
    },

    // メニューボタンのスタイル
    menuButton: {
        color: "#031a63",
        fontSize: "18px",
        padding: "8px 16px",
        textShadow: `
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
        `,
        fontWeight: 700,
        textTransform: 'none',
        position: 'relative',
        '&:hover': {
            // backgroundColor: "rgba(221, 226, 236, 0.8)
            '&::after': {
                width: '70%',
            }
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0%',
            height: '3px',
            backgroundColor: '#031a63',
            transition: 'width 0.3s ease',
            borderRadius: '2px',
        }
    },
    menuItem: {

    },
    mobileMenuIcon: {
        color: "#031A63",
        fontSize: '32px',
        transition: 'transform 0.3s ease',
        '&:hover' :{
            transform: 'scale(1.1)',
        }
    },
    mobileMenuDrawer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    mobileMenuHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
    closeButton: {
        color: '#031A63',
        fontSize: '32px',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'rotate(90deg)',
        }
    },
    mobileMenuList: {
        padding: '32px 0'
    },
    mobileMenuItem: {
        padding: '16px 24px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(3, 26,99,0.05)'
        }
    },
    mobileMenuItemText: {
        color: '#031A63',
        fontSize: '24px',
        fontWeight: 500,
        width: '100%',
        textAlign: 'center',
    }
} as const