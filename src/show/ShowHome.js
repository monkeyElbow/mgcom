import { Image, Container, Row, Col } from "react-bootstrap";

export default function ShowHome() {
  return (
    <>
      <Container>
        {/* <p className="fs-1 text-uppercase text-right pt-5">Art exhibit</p>
        <p className="fs-2 lh-1 fw-bold text-uppercase text-right">
          July 1 - August 3 2022
        </p>
        <p className="fs-4 lh-1 text-uppercase text-right">
          <b>Location:</b> Banter Brewing Co
        </p>
        <p className="fs-5 lh-1 text-uppercase text-right">
          330 W Farm Rd 182, Springfield, MO 65810
        </p> */}
        <p className="h1 lh-1 fw-bold pb-4" style={{ fontSize: "20vw" }}>
          Places
        </p>
        <p className="lead fs-4 pb-4 lh-lg">
          With this collection of beautiful places from around the world, I hope
          to create a feeling of nostalgia for the places you’ve been and of
          wanderlust for those you’ve dreamed of visiting.
        </p>
      </Container>

      <Container className="py-5">
        <Row
          className="
        row-cols-1 
        row-cols-lg-4 
        row-cols-md-3 
        fw-bold
        
        "
        >
          <Col>
            <Image fluid src={require("../show/img/1Cinque400.jpg")} />
            <p>Cinque Terre, Italy<span className="text-warning"> SOLD</span></p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/2Venice400.jpg")} />
            <p>Venice</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/3Tonnara400.jpg")} />
            <p>Tonnara di Scopello, Italy<span className="text-warning"> SOLD</span></p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/4ItalianAlleyway400.jpg")} />
            <p>Italian Alleyway</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/5GreeceInOrange400.jpg")} />
            <p>Greece in Orange<span className="text-warning"> SOLD</span></p>
            
          </Col>
          <Col>
            <Image
              fluid
              src={require("../show/img/6GondolasInVenice400.jpg")}
            />
            <p>Gondolas in Venice</p>
          </Col>
          <Col>
            <Image
              fluid
              src={require("../show/img/7HallstattAustria400.jpg")}
            />
            <p>Hallstatt, Austria</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/8BoatsInThailand400.jpg")} />
            <p>Boats In Thailand</p>
          </Col>

          <Col>
            <Image fluid src={require("../show/img/9Eiffel400.jpg")} />
            <p>Eiffel Tower in Fall</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/10QuaintStreet400.jpg")} />
            <p>Quaint Street</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/11ItalianStreet400.jpg")} />
            <p>Italian Street</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/12VeniceInReds400.jpg")} />
            <p>Venice in Reds</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/13CherryBlossoms400.jpg")} />
            <p>Cherry Blossoms</p>
          </Col>
          <Col>
            <Image fluid src={require("../show/img/14Tangier400.jpg")} />
            <p>Tangier Morocco</p>
          </Col>
        </Row>

<p className="text-center h5 pt-5">To browse prints or products of this series visit my <a href="https://www.redbubble.com/people/mgerhold/shop"
target="_blank"
rel="noopener noreferrer">Redbubble shop</a>.</p>


<p className="text-center">To purchase an original painting please email me at mgerhold@gmail.com</p>
      </Container>
    </>
  );
}
