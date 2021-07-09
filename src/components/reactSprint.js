import {Container, Col, Row, Button} from 'react-bootstrap';
import Phant from '../components/phantLarge';
import Text from 'react-svg-text'
import Bird from '../components/bird';
import PhantLogo from '../components/phantLogo';
import {useSpring, animated} from 'react-spring';
import Toggle from '..//components/Toggle';


const HomePage = () => {

const fade = useSpring({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
});

const annoy = useSpring({
    from: {color: 'green'},
    to: async next => {
        
      await next({color:'red'})
      await next({color:'blue'})
      await next({color:'green'})
      await next({color:'yellow'})
      await next({color:'salmon'})
      await next({color:'orange'})
      await next({color:'white'})
      await next({color:'black'})
      await next({color:'red'})
        
    } 
})


    return(
<>
<Container fluid className="bg-home p-0">
    <animated.p style={fade}>this fades on load</animated.p>
    <animated.h3 style={annoy}>annoy</animated.h3>

<Container className="w-25">
    <Container className="d-flex align-items-center p-4 justify-content-center">
    <PhantLogo />
    <Toggle />
    </Container>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 100 100"
      overflow="visible"
  
    >
      <circle cx={50} cy={50} r={50} fill="#fff" />
    </svg>

</Container>


<Phant />
{/* <Bird /> */}
</Container>



</>
    )
};

export default HomePage;