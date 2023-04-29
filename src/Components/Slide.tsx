import "./css/Slide.css"
import {Image} from "react-bootstrap";

export function Slide(props: {title: string, text: string, backgroundColor: string, color: string,
    img1: string, img2: string, img3: string, img4: string}) {
    return (
        <div style={{backgroundColor: props.backgroundColor, color: props.color}} className="slide">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Image className="slide-img1 img" src={require(`./images/${props.img1}`)}/>
            <Image className="slide-img2 img" src={require(`./images/${props.img2}`)}/>
            <Image className="slide-img3 img" src={require(`./images/${props.img3}`)}/>
            <Image className="slide-img4 img" src={require(`./images/${props.img4}`)}/>
        </div>
    )
}