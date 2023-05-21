import Typography from "./Typography";
import {BASE_STYLE} from "./style";

export default function Container(props: any) {
    return (
        <div 
            style={ 
                props.color.Container(props.width ? props.width : "auto", props.height ? props.height : "auto") 
            }
        >
            <Typography variant="h1" style={{ ...BASE_STYLE.Typography, textAlign: "center" }}>{props.label}</Typography>
            {props.children}
        </div>
    )
}
