export default function Typography(props: any) {
    const style = {
        fontFamily: "Hind"
    }

    switch(props.variant) {
        case "h1":
            return <h1 style={{...style, ...props.style }}>{props.children}</h1>
        case "h2":
            return <h2 style={{ ...style, ...props.style }}>{props.children}</h2>
        default:
            return <p style={{ ...style, ...props.style }}>{props.children}</p>
    }
}