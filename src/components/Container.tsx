import { Green } from "./style";

export default function Container(props: any) {
    return (
        <div style={{ ...Green.Container, width: "500px", height: "500px" }}>
            <h2 style={Green.Label}>{props.label}</h2>
            {props.children}
        </div>
    )
}