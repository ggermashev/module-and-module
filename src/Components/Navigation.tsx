import {Container, Nav, Navbar} from "react-bootstrap";


export function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand href="/" style={{color: "orangered"}}>Модуль и Модуль</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/shop">Магазин</Nav.Link>
                        <Nav.Link href="/dressing-room">Примерочная</Nav.Link>
                        <Nav.Link href="/basket">Корзина</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}