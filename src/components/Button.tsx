import { useState, useEffect} from "react";

export default function Button(props: any) {
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
        borderRadius: "0.25em", 
        borderWidth: "1px",
        color: "#e5e5e5",
        fontFamily: "Hind"
    }

    const colors = [
        {
            background: "linear-gradient(#C52233AA, #A51C30AA, #C52233AA)",
            borderColor: "#580C1F"
        },
        {
            background: "linear-gradient(#069E2DAA, #04773BAA, #069E2DAA)",
            borderColor: "#03440C"
        },
        {
            background: "linear-gradient(#BC96E6AA, #55285FAA, #BC96E6AA)",
            borderColor: "#210B2C"
        },
    ]

    return <button style={{ ...style, ...colors[color]}} onClick={props.onClick}>{props.label}</button>
}