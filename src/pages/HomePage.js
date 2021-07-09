import {Container} from 'react-bootstrap';
import Phant from '../components/phantLogo';
import Bio from '../components/Bio';
// import Text from 'react-svg-text'
import Bird from '../components/bird';
import Links from '../components/Links';
import FineArt from '../components/FineArt';


const HomePage = () => {


    return(
<>
<Container fluid className="bg-green py-5 d-flex justify-content-center">

<div
style={{width:"15rem"}}>
<Phant />
</div>


</Container>

<Bio />
<Links />

{/* <FineArt /> */}


<Bird />





</>
    )
};

export default HomePage;