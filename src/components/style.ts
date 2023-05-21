interface Style {
    Container: React.CSSProperties;
    Label: React.CSSProperties;
}
const BASE_STYLE: Style = {
    Container: {
        borderRadius: "6px",
        margin: "1em",
        padding: "0.5em"
    },
    Label: {
        textAlign: "center"
    }
}

export const Green: Style = {
    Container: {
        ...BASE_STYLE.Container,
        background: "radial-gradient(closest-corner, #04773B88, #058E3F88, #069E2D88)",
        boxShadow: "10px 10px 4px #03440C88"
    }, 
    Label: {
        ...BASE_STYLE.Label,
        color: "#121212"
    }
}