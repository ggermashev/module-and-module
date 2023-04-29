import {useRef, useState} from "react";
import {Button, Col, Container, Dropdown, Form, Image, Row} from "react-bootstrap";
import "./css/Shop.css"
import {Range} from 'react-range';
import {CustomRange} from "./CustomRange";
import {Card} from "./Card";
import {Pagination} from "./Pagination";
import {DressList} from "./DressList";

export function Shop() {
    const [modules, setModules] = useState(["Тело", "Рукав", "Шорты", "Штанина", "Капюшон"])
    const [module, setModule] = useState("Все модули")
    const [from, setFrom] = useState([0])
    const [to, setTo] = useState([10000])
    return (
        <div className="shop">
            <div className="filters">
                <div className="ranges">
                    <p>{from}р - {to}р</p>
                    <CustomRange value={from} setValue={setFrom}/>
                    <CustomRange value={to} setValue={setTo}/>
                </div>
                <div className="modules">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            {module}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={e => {
                                setModule("Все модули")
                            }}>Все модули</Dropdown.Item>
                            {modules.map(m => {
                                return (<Dropdown.Item onClick={e => {
                                    setModule(m)
                                }}>{m}</Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <DressList/>
        </div>
    )
}