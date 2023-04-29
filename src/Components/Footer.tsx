import "./css/Footer.css"
import {Col, Container, Image, Row} from "react-bootstrap";

export function Footer() {
    return (
        <div className="footer">
            <div className="logo-container-1">
                <Image className="logo-empty" src={require("./images/logo-empty.png")}/>
            </div>
            <div className="logo-container-2">
                <Image className="square" src={require("./images/square.png")}/>
            </div>
            <div className="top-content">
                <h2>Модуль и Модуль</h2>
            </div>
            <div className="white-row"/>
            <div className="bot-content">
                <span>
                    <h4>Telegram</h4>
                    <h4>VK</h4>
                </span>
                <span>
                    <h4>Почта</h4>
                    <h4>Телефон</h4>
                </span>
            </div>
        </div>
    )
}