import "./css/DressingRoom.css"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Card} from "./Card";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {Pagination} from "./Pagination";

export function DressingRoom() {
    const [headBackground, setHeadBackground] = useState("")
    const [leftHandBackground, setLeftHandBackground] = useState("")
    const [bodyBackground, setBodyBackground] = useState("")
    const [rightHandBackground, setRightHandBackground] = useState("")
    const [shortsBackground, setShortsBackground] = useState("")
    const [leftLegBackground, setLeftLegBackground] = useState("")
    const [rightLegBackground, setRightLegBackground] = useState("")
    const [leftFootBackground, setLeftFootBackground] = useState("")
    const [rightFootBackground, setRightFootBackground] = useState("")
    const [currentBackground, setCurrentBackground] = useState([headBackground, setHeadBackground])
    const head = useRef(null)
    const leftHand = useRef(null)
    const rightHand = useRef(null)
    const body = useRef(null)
    const leftLeg = useRef(null)
    const rightLeg = useRef(null)
    const shorts = useRef(null)
    const leftFoot = useRef(null)
    const rightFoot = useRef(null)
    const previous = useRef(head)
    return (
        <div className="dressing-room">
            <h1>Примерочная</h1>
            <div className="choice">
                <Container>
                    <Row className="choice-row">
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"head.jpg"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"pic1.png"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"hand.jpg"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"leg.jpg"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"foot.jpg"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                        <Col className="choice-col" xs={12} sm={12} md={6} lg={4} xxl={3}>
                            <Card img={"shorts.jpg"} bg={currentBackground[0] as string} setBG={currentBackground[1] as Dispatch<SetStateAction<string>>}/>
                        </Col>
                    </Row>
                    <Pagination/>
                </Container>
            </div>
            <div className="person">
                <Container className="person-container">
                    <Row>
                        <Col xs={12} sm={12} className="top">
                            <div className="head" style={{border: "2px solid orangered"}} ref={head}>
                                <Image src={headBackground} onClick={e => {
                                    setCurrentBackground([headBackground, setHeadBackground])
                                    //@ts-ignore
                                    previous.current.current.style.border = "2px solid black"
                                    previous.current = head
                                    //@ts-ignore
                                    head.current.style.border = "2px solid orangered"
                                }}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} className="upper">
                            <div className="left-hand" ref={leftHand}><Image src={leftHandBackground} onClick={e => {
                                setCurrentBackground([leftHandBackground, setLeftHandBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = leftHand
                                //@ts-ignore
                                leftHand.current.style.border = "2px solid orangered"
                            }}/></div>
                            <div className="body" ref={body}><Image src={bodyBackground} onClick={e => {
                                setCurrentBackground([bodyBackground, setBodyBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = body
                                //@ts-ignore
                                body.current.style.border = "2px solid orangered"
                            }}/></div>
                            <div className="right-hand" ref={rightHand}><Image src={rightHandBackground} onClick={e => {
                                setCurrentBackground([rightHandBackground, setRightHandBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = rightHand
                                //@ts-ignore
                                rightHand.current.style.border = "2px solid orangered"
                            }}/></div>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12} sm={12} className="mid">
                            <div className="shorts" ref={shorts}><Image src={shortsBackground} onClick={e => {
                                setCurrentBackground([shortsBackground, setShortsBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = shorts
                                //@ts-ignore
                                shorts.current.style.border = "2px solid orangered"
                            }}/></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} className="lower">
                            <div className="left-leg" ref={leftLeg}><Image src={leftLegBackground} onClick={e => {
                                setCurrentBackground([leftLegBackground, setLeftLegBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = leftLeg
                                //@ts-ignore
                                leftLeg.current.style.border = "2px solid orangered"
                            }}/></div>
                            <div className="right-leg" ref={rightLeg}><Image src={rightLegBackground} onClick={e => {
                                setCurrentBackground([rightLegBackground, setRightLegBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = rightLeg
                                //@ts-ignore
                                rightLeg.current.style.border = "2px solid orangered"
                            }}/></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} className="bottom">
                            <div className="left-foot" ref={leftFoot}><Image src={leftFootBackground} onClick={e => {
                                setCurrentBackground([leftFootBackground, setLeftFootBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = leftFoot
                                //@ts-ignore
                                leftFoot.current.style.border = "2px solid orangered"
                            }}/></div>
                            <div className="right-foot" ref={rightFoot}><Image src={rightFootBackground} onClick={e => {
                                setCurrentBackground([rightFootBackground, setRightFootBackground])

                                //@ts-ignore
                                previous.current.current.style.border = "2px solid black"
                                previous.current = rightFoot
                                //@ts-ignore
                                rightFoot.current.style.border = "2px solid orangered"
                            }}/></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}