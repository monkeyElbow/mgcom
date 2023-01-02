import { Container, Image, Row, Col } from "react-bootstrap";

export default function Bio() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className="text-md-right text-sm-center text-xs-center">
            <Image className="pb-4" fluid src={require('../img/IMG_6303.jpg')} />
          </Col>

          <Col lg={8} md={12} sm={12}>
            <p className="fs-1 fw-bold">Melissa Gerhold</p>
            <h5 style={{ lineHeight: ".5rem" }}>ARTIST/GRAPHIC DESIGNER</h5>
            <p className="fw-bold">Southwest Missouri</p>

            <p style={{lineHeight:"2rem"}}>
            A Graphic Designer and Artist for over 20 years, Melissa has a passion for creating beautiful art that captures her love for travel and inspires the viewer to appreciate beauty in the world. She has a BFA in Graphic Design and a Minor in French. Travels throughout Europe have greatly influenced her artistic style. Melissa has experience as a Graphic Designer, Fine Artist, and Art Instructor. She paints, draws, and works in mixed media. </p>
            
            <p className="fw-bold pt-3 px-5 fs-5">“I paint watercolor paintings of places, faces, and animals worldwide. In my art, I try to create connections by imagining a beautiful world where all of nature lives in harmony.”
            </p>

            <p className="pt-3">
              <strong>mgerhold@gmail.com</strong>
            </p>
            {/* <p>
    <strong>
EXPERIENCE:</strong> <br />Commercial Artist, Graphic Designer, Marketing Coordinator, Fine Artist, Instructor
</p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
