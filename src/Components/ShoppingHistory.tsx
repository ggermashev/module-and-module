import "./css/ShoppingHistory.css"
import {Accordion} from "react-bootstrap";
import {DressList} from "./DressList";

export function ShoppingHistory() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>20.04.2023 Четверг</Accordion.Header>
                <Accordion.Body>
                    <DressList/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>24.04.2023 Понедельник</Accordion.Header>
                <Accordion.Body>
                    <DressList/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}