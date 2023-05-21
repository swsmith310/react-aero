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
        color: "#e5e5e5",
        fontFamily: "Hind"
    }

    const colors = [
        {
            background: "linear-gradient(#A51C30AA, #A7333FAA)"
        }
    ]

    return <button style={{ ...style, ...colors[color]}} onClick={props.onClick}>{props.label}</button>
}