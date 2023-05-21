import { useEffect, useState } from "react";
import Typography from "./Typography";

export default function Container(props: any) {
    const [color, setColor] = useState(0);

    useEffect(() => {
        switch(props.color) {
            case "red":
                setColor(0);
                break;
            case "green":
                setColor(1);
                break;
            case "violet":
                setColor(2);
                break;
        }
    }, []);

    const style = {
        borderRadius: "6px",
        margin: "1em",
        padding: "0.5em",
        width: props.width?props.width:"auto",
        height: props.height?props.height:"auto",
    }

    const colors = [
        {
            background: "radial-gradient(closest-corner, #A51C3088, #A7333F88, #C5223388)",
            boxShadow: "10px 10px 4px #580C1F88"
        },
        {
            background: "radial-gradient(closest-corner, #04773B88, #058E3F88, #069E2D88)",
            boxShadow: "10px 10px 4px #03440C88"
        },
        {
            background: "radial-gradient(closest-corner, #D8B4E288, #BC96E688, #55285F88)",
            boxShadow: "10px 10px 4px #210B2C88"
        }
    ]

    return (
        <div style={{ ...style, ...colors[color]}}>
            <Typography variant="h1" style={{ textAlign: "center" }}>{props.label}</Typography>
            {props.children}
        </div>
    )
}
