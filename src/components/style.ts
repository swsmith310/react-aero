interface Style {
    Container: React.CSSProperties;
    Typography: React.CSSProperties;
}
export const BASE_STYLE: Style = {
    Container: {
        borderRadius: "6px",
        margin: "1em",
        padding: "0.5em",
    },
    Typography: {
        fontFamily: "Hind"
    }
}

export const Green: Style = {
    Container: {
        ...BASE_STYLE.Container,
        background: "radial-gradient(closest-corner, #04773B88, #058E3F88, #069E2D88)",
        boxShadow: "10px 10px 4px #03440C88"
    }, 
    Typography: {
        ...BASE_STYLE.Typography,
    }
}