import {useState} from 'react';
import {useSpring, animated} from 'react-spring';

const Toggle = () => {

    const[isToggled, setToggle] = useState(false);
    const fade = useSpring({
        config: {duration: 1000},
        opacity: isToggled ? 1 : 0,
        color: isToggled ? '#000' : 'green',
        fontSize: isToggled ? '2rem' : '3rem',
        transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px, 0)'
    })

    return(
        <div>
        <animated.h3 style={fade}>Fade Demo</animated.h3>

<button onClick={() => setToggle(!isToggled)}>Toggle</button>

        </div>
    )
}

export default Toggle;