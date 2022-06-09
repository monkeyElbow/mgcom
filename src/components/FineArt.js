import { Container, Image, Row, Col } from "react-bootstrap"

export default function FineArt() {
    return (
        <>
        <Container>

<Row>
    <Col md={4}>
         <h3>Fine Art</h3>   
    </Col>
    <Col>
    <Image fluid src="https://melissagerhold.com/images/bird_990.jpg" />
    </Col>
</Row>

<Image fluid src="https://melissagerhold.com/images/tree_990.jpg" />


        </Container>
        </>
    )
}
