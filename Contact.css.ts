
export const contactStyles = {

    container: {
        
        marginTop: '38px'
    },
    // メインコンテナのスタイル
    content: {
        padding: "40px 0",
        minHeight: "60vh",
    },
    //見出しのスタイル
    heading: {
        marginBottom: "24px",
        fontWeight: 500
    },

    // 連絡先情報のスタイル
    contactInfo: {
        lineHeight: 2,
        color: "#333333",
        marginBottom: '32px'
    },
    // フォームのスタイル
    form: {
        maxWidth: '600px',
        margin: '0 auto'
    },
    // フォーム項目のスタイル
    formField: {
        marginBottom: '16px'
    },

    validField: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4caf50'
                }
            }
        }
    },
    invalidField: {
        animation: 'shake 0.5s'
    },
    
    // 送信ボタンのスタイル
    submitButton: {
        marginTop: '16px'
    },
    // 送信成功メッセージのスタイル
    successMessage: {
        backgroundColor: '#e8f5e9',
        color: '#2e7d32',
        padding: '16px',
        borderRadius: '4px',
        marginBottom: '24px'
    },
    // レスポンシブ対応
    responsiveForm: {
        maxWidth: '600px',
        margin: '0 auto',
        '& .MuiGrid-item': {
            padding: {xs:'8px', sm:'16px'}
        }
    },
    // モバイル用のボタンコンテナ
    mobileBtnContainer: {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: 'space-between',
        gap: {xs:'16px', sm:'8px'},
        marginTop: '16px'
    },
    // モバイルの送信ボタン
    mobileSubmitBtn: {
        width: {xs: '100%', sm: 'auto'}
    },
    animatedFiedld: {
        trasition: 'all 0.3s ease-in-out',
        '&:focus-within': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    }
} as const