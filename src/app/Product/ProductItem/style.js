import styles from "../../../common/styleConsts"

const { card: { flexDirection, padding, border, borderRadius, margin } } = styles


export const cardStyle = `
    .card {
        flex-direction: ${flexDirection}
        padding: ${padding};
        border: ${border};
        border-radius: ${borderRadius};
        margin: ${margin}
    }
`