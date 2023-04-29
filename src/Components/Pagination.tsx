import {Col, Image, Row} from "react-bootstrap";
import {useRef} from "react";
import "./css/Pagination.css"

export function Pagination() {
    const leftArrow = useRef(null)
    const rightArrow = useRef(null)
    return (
        <Row>
            <Col className="pagination" xs={12} sm={12}>
                <Image className="pagination-element" ref={leftArrow} src={require("./images/arrow-left.png")}
                       onMouseOver={e => {
                           //@ts-ignore
                           leftArrow.current.src = require("./images/arrow-left-orange.png")
                       }}
                       onMouseOut={e => {
                           //@ts-ignore
                           leftArrow.current.src = require("./images/arrow-left.png")
                       }}
                />
                <div className="pagination-element"><p>1</p></div>
                <div className="pagination-element"><p>2</p></div>
                <div className="pagination-element"><p>3</p></div>
                <Image className="pagination-element" ref={rightArrow} src={require("./images/arrow-right.png")}
                       onMouseOver={e => {
                           //@ts-ignore
                           rightArrow.current.src = require("./images/arrow-right-orange.png")
                       }}
                       onMouseOut={e => {
                           //@ts-ignore
                           rightArrow.current.src = require("./images/arrow-right.png")
                       }}
                />
            </Col>
        </Row>
    )
}