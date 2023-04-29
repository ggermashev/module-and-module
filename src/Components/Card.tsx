import "./css/Card.css"
import {Image} from "react-bootstrap";
import {MouseEventHandler, useRef, useState} from "react";

export function Card(props: {img: string, bg?: string, setBG?: (s: string) => void}) {
    const [hover, setHover] = useState(false)
    const hanger = useRef(null)
    const cart = useRef(null)
    const cardImg = useRef(null)
    return (
        <div onClick={e => {
            if (props.setBG) {
                //@ts-ignore
                props.setBG(cardImg.current.src)
            }
        }} className="card"
             onMouseOver={e => {
                 setHover(true)
             }}
             onMouseOut={e => {
                 setHover(false)
             }}
        >
            <Image className="card-img" ref={cardImg} src={require(`./images/${props.img}`)}/>
            {hover && <Image className="dressing-room-img" ref={hanger} src={require("./images/hanger.png")}
                             onMouseOver={e => {
                                 //@ts-ignore
                                 hanger.current.src = require("./images/hanger_orange.png")
                             }}
                             onMouseOut={e => {
                                 //@ts-ignore
                                 hanger.current.src = require("./images/hanger.png")
                             }}
            />}
            {hover && <Image className="basket-img" ref={cart} src={require("./images/cart.png")}
                             onMouseOver={e => {
                                 //@ts-ignore
                                 cart.current.src = require("./images/cart_orange.png")
                             }}
                             onMouseOut={e => {
                                 //@ts-ignore
                                 cart.current.src = require("./images/cart.png")
                             }}
            />}
            <h3 className="price">4000р</h3>
        </div>
    )
}