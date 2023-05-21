import Typography from "./Typography";
import { Green } from "./style";

export default function Container(props: any) {
    return (
        <div 
            style={{ 
                ...Green.Container, 
                width: props.width ? props.width : "auto", 
                height: props.height ? props.height : "auto" 
            }}
        >
            <Typography variant="h1" style={{ ...Green.Typography, textAlign: "center" }}>{props.label}</Typography>
            {props.children}
        </div>
    )
}