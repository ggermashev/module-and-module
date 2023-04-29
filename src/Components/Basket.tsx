import "./css/Basket.css"
import {Button, Col, Container, Row} from "react-bootstrap";
import {Card} from "./Card";
import {Pagination} from "./Pagination";
import {DressList} from "./DressList";
import {useRef, useState} from "react";
import {ShoppingHistory} from "./ShoppingHistory";

export function Basket() {
    const [flag, setFlag] = useState(true)
    const basketBtn = useRef(null)
    const historyBtn = useRef(null)
    return(
        <div className="basket">
            <div className="basket-choice">
                <Button className="btn" ref={basketBtn} style={{borderColor: "orangered"}} onClick={e => {
                    setFlag(true)
                    //@ts-ignore
                    basketBtn.current.style.borderColor = "orangered"
                    //@ts-ignore
                    historyBtn.current.style.borderColor = "black"
                    //@ts-ignore
                }}>Корзина</Button>
                <Button className="btn" ref={historyBtn} onClick={e => {
                    setFlag(false)
                    //@ts-ignore
                    basketBtn.current.style.borderColor = "black"
                    //@ts-ignore
                    historyBtn.current.style.borderColor = "orangered"
                    //@ts-ignore
                }}>Покупки</Button>
            </div>
            {flag && <DressList/>}
            {!flag && <ShoppingHistory/>}
            {flag && <Button className="btn buy-btn">Сделать заказ</Button>}
        </div>
    )
}