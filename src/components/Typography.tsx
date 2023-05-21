import { BASE_STYLE } from "./style"

export default function Typography(props: any) {
    switch(props.variant) {
        case "h1":
            return <h1 style={props.style ? props.style : BASE_STYLE.Typography}>{props.children}</h1>
        case "h2":
            return <h2 style={props.style ? props.style : BASE_STYLE.Typography}>{props.children}</h2>
        default:
            return <p style={props.style ? props.style : BASE_STYLE.Typography}>{props.children}</p>
    }
}