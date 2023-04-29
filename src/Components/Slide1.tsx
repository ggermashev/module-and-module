import "./css/Slide1.css"
import "./css/Slide.css"
import {Image} from "react-bootstrap";

export function Slide1() {
    return (
        <div className="slide slide1">
            <h1>Модуль и Модуль</h1>
            <p>Встречайте новый бренд модной одежды</p>
            <Image className="slide-img1 img" src={require(`./images/dima.webp`)}/>
            <Image className="slide-img2 img" src={require(`./images/gosha.png`)}/>
            <Image className="slide-img3 img" src={require(`./images/sasha.jpg`)}/>
            <Image className="slide-img4 img" src={require(`./images/grisha.jpg`)}/>
        </div>
    )
}