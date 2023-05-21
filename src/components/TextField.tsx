import { useEffect, useState } from "react";

export default function TextField(props: any) {
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
        borderSize: "1px",
        borderStyle: "solid",
        fontFamily: "Hind"
    }
    
    const colors = [
        {
            color: "#580C1F",
            borderColor: "#580C1F"
        },
        {
            color: "#03440C",
            borderColor: "#03440C"
        },
        {
            color: "#210B2C",
            borderColor: "#210B2C"
        },
    ]
    return <input style={{ ...style , ...colors[color]}} value={props.value} onChange={props.onChange} type="text" />
}