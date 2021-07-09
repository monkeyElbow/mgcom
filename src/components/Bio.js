import { Container, Image, Row, Col } from "react-bootstrap"

export default function Bio() {
    return (
        <>

        <Container className="my-5">
<Row>

<Col className="text-md-right text-sm-center">
            <Image fluid src="https://melissagerhold.com/images/me_6303.jpg?crc=534784634" />
</Col>
<Col md={8} sm={12}>
<h3>
MELISSA S. GERHOLD
</h3>
<h5 style={{lineHeight:".5rem"}}>
ARTIST/GRAPHIC DESIGNER
</h5>
<p>
Southwest Missouri
</p>
<p>
    <strong>
melissa.gerhold@mediavelocity.com
    </strong>
</p>

 <p>
Melissa Gerhold is a freelance artist with a BFA in Graphic Design and a Minor in French. She’s studied art and French in Europe. Melissa has experience in print design, page layout, photography, photo editing, illustration, and web design. She has taught design classes at Ozarks Technical Community College in Springfield, Missouri. Melissa also paints, draws, and works in mixed media.
 </p>
<p>
    <strong>
EXPERIENCE:</strong> Commercial Artist, Graphic Designer, Marketing Coordinator, Fine Artist, Instructor
</p>
</Col>
</Row>
        </Container>
        </>
    )
}
