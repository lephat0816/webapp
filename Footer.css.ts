
// フッタースタイル
export const footerStyles = {
    // フッター全体のスタイル
    footer: {
        backgroundColor: "#f3e6e6",
        borderTop: "1px solid rgb(248, 191, 191)",
        marginTop: "auto",
        padding: "32px 0",
        fontSize: "14px"
    },

    // リンク
    links: {
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        margin: "16px 0",
        "& a": {
            color: "#666666",
            textDecoration: "none",
            fontSize: "14px",
            "&:hover": {
                color: "#000000"
            }
        }
    }
} as const