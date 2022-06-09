import {Container, Image, Row, Col, Card, Button} from 'react-bootstrap';
import Phant from '../components/phantLogo';
import Bio from '../components/Bio';
import Bird from '../components/bird';
import Links from '../components/Links';
// import FineArt from '../components/FineArt';
// import Design from '../components/Design';
// import Photography from '../components/Photography';
// import Test from '../components/Test';

// import {useState} from 'react'

const HomePage = () => {

//     const [fillColors, setFillColors] = useState(Array(10).fill('white'))
// const [currentColor, setCurrentColor] = useState('blue')

// const onFillColor = (i) => {
//     let newFillColors = fillColors.slice(0)
//     newFillColors[i] = currentColor
//     setFillColors(newFillColors)
// }

    return(
<>

{/*  */}
{/* <Container fluid className="bg-green py-5 d-flex justify-content-center">
<div
style={{width:"15rem", height:"100vh"}}>
<Test fillColors={fillColors} onFill={onFillColor} />
</div>

    https://uxdesign.cc/5-steps-to-create-a-simple-digital-coloring-book-in-react-3d4f5b2af822
    </Container> */}

<Links />
<Container className=''>
<p className='fs-3 fw-bold pt-5 text-uppercase lh-small'>Melissa Gerhold</p>


<p>Freelance Artist</p>

</Container>

<Container fluid className='p-5' style={{minHeight:"80vh"}}>

<Image fluid src={require('../img/venice.jpg')} />

</Container>


<Container fluid className='p-5 text-white d-flex flex-column justify-content-center align-items-center' style={{background:"var(--color1)", minHeight:"40vh"}}>
    {/* <p className='fs-1 fw-bold text-uppercase ls-1'>Dream Create Connect</p> */}
    <p className='fs-3'>Creating beautiful art to inspire dreams and capture the imagination</p>
</Container>

<Container className='p-5' style={{minHeight:"80vh"}}>
    <Row>
        <Col md={6}>
<Image pointerEvents="none" onContextMenu="return false;" fluid src={require('../img/tiger600.jpg')} />
        </Col>
        <Col className='d-flex flex-column justify-content-center align-items-center'>

        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.redbubble.com/people/mgerhold/shop"
          variant="outline-secondary"
          size="sm"
        >
          <strong>Find More At Red Bubble</strong>
        </Button>{" "}
        </Col>
    </Row>
</Container>

{/* <Container fluid className='p-5 text-white d-flex flex-column justify-content-center align-items-center' style={{background:"var(--color1)", minHeight:"40vh"}}>

<p className='fs-4'>Get first access to free content and latest art</p>

<Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.redbubble.com/people/mgerhold/shop"
          variant="outline-secondary"
          size="sm"
        >
          <strong>Join the community</strong>
        </Button>
</Container> */}


{/* <Container className="py-5">
    <Row>
        <Col>
        <Card className='p-4 text-white text-center' style={{background:'#666'}}>
            <p className='fw-bold fs-4'>Animals</p>
            <p>capturing the beauty of wise and wonderful beings in nature</p>
            </Card>
        </Col>
        <Col>
        <Card className='p-4 text-white text-center' style={{background:'#666'}}>
            <p className='fw-bold fs-4'>
            places
            </p>
            <p>beautiful places worldwide inspiring nostalgia and wanderlust</p>
            </Card>
        </Col>
        <Col>
        <Card className='p-4 text-white text-center' style={{background:'#666'}}>
            <p className='fw-bold fs-4'>
            faces
            </p>
            <p>imagining a beautiful world where all of nature lives in harmony</p>
            </Card>
        </Col>
    </Row>
</Container> */}



<Bird />
<Bio />
<Container fluid className="bg-green py-5 d-flex justify-content-center">

<div
style={{width:"15rem"}}>
<Phant />
</div>
</Container>
{/* <Design />
<Photography />
<FineArt /> */}







</>
    )
};

export default HomePage;