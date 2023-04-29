import "./css/DressList.css"
import {Col, Container, Row} from "react-bootstrap";
import {Card} from "./Card";
import {Pagination} from "./Pagination";

export function DressList() {
    return(
        <div className="dress">
            <Container>
                <Row className="dress-row">
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"head.jpg"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"hand.jpg"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"pic1.png"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"pic2.png"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"shorts.jpg"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"leg.jpg"}/>
                    </Col>
                    <Col className="dress-card" xs={12} sm={12} md={6} lg={4} xxl={3}>
                        <Card img={"foot.jpg"}/>
                    </Col>
                </Row>
                <Pagination/>
            </Container>
        </div>
    )
}