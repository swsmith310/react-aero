interface Style {
    Container: (width: string, height: string) => React.CSSProperties;
    Typography: React.CSSProperties;
}
export const BASE_STYLE: Style = {
    Container: (width, height) => ({
        borderRadius: "6px",
        margin: "1em",
        padding: "0.5em",
        width: width,
        height: height
    }),
    Typography: {
        fontFamily: "Hind"
    }
}

export const Red: Style = {
    Container: (width, height) => ({
        ...BASE_STYLE.Container(width, height),
        background: "radial-gradient(closest-corner, #A51C3088, #A7333F88, #C5223388)",
        boxShadow: "10px 10px 4px #580C1F88"
    }), 
    Typography: {
        ...BASE_STYLE.Typography,
    }
}

export const Green: Style = {
    Container: (width, height) => ({
        ...BASE_STYLE.Container(width, height),
        background: "radial-gradient(closest-corner, #04773B88, #058E3F88, #069E2D88)",
        boxShadow: "10px 10px 4px #03440C88"
    }), 
    Typography: {
        ...BASE_STYLE.Typography,
    }
}

export const Violet: Style = {
    Container: (width, height) => ({
        ...BASE_STYLE.Container(width, height),
        background: "radial-gradient(closest-corner, #D8B4E288, #BC96E688, #55285F88)",
        boxShadow: "10px 10px 4px #210B2C88"
    }), 
    Typography: {
        ...BASE_STYLE.Typography,
    }
}