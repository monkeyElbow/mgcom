import {useState, useEffect} from 'react';

const Simon = () => {

const [order, setOrder] = useState([]);
const [playerOrder, setPlayerOrder] = useState([]);
const [on, setOn] = useState(true);
const [win, setWin] = useState(false);
const [turn, setTurn] = useState('player');
const [counter, setCounter] = useState(0);
const [good, setGood] = useState(true);
const [score, setScore] = useState(0);
const [NumberOfButtons, setNumberOfButtons] = useState(0)
const [compTurn, setCompTurn] = useState(false)
const [round, setRound] = useState(1)
// const [interval, setInterval] = useState(1000)
// const [timeOut, setTimeOut] = useState(2000)

const buttons = document.querySelectorAll('#btn')


// create random order
useEffect(() => {
  const numberArray = Array.from({length:5}, () => Math.floor(Math.random() * 9) + 1);
  setOrder(numberArray)
}, [])

// fishing for winner but doesn't work
// useEffect(() => {
//   if (playerOrder === order) {setWin(true)} else {setWin(false)}
// }, [])

// each button clickable. assign order and change return 
useEffect(() => {

// map all buttons to button and index
  buttons.forEach((button, index) => {

//add event to all buttons. assign index to each?
    button.addEventListener('click', (e) => {
      setCounter(counter + 1);
      // button.style.fillColor = "red"
      // console.log(`clicked a button: index:${index}`);
      // console.log(e.currentTarget)
      // console.log(e.currentTarget.dataset)
    })
  })
  console.log('mapped all buttons')
  
}, [])
// flash()
function flash() {
  buttons.style.fillColor='red'

  // toggle
// buttons.classList.toggle('clr1');
  // }
}

function play() {
  // if on is true
  // play first shape
  // wait for user input
  setWin(false)
  // intervalid = setIntercal(gameTurn, 800);
  compTurn(false)
  setGood(true)
}


function gameTurn() {
  setOn(false)

//   if (compTurn) {
// clearColor()
// setOn(true)
  // }
// } 
// if (!compTurn) {
//   clearColor()
//   Timeout
}

    return(
        <>
        <div>
         
          <p className="green">Round: {round}</p>

        <p>order: {order}</p>
        <p>Player order: {playerOrder}</p>
        {compTurn && <h4 className="red">ComputerTurn</h4>}
        {!compTurn && <h4 className="green">PlayerTurn</h4>}
       
        <p>Number Of buttons:  {buttons.length}</p>
        <p>score: {score}</p>
        <p>turn: {turn}</p>
        {on && <h5 className="green">Game is On</h5>}
        {!on && <h5 className='red'>Game is Off</h5>}

        <p>counter: {counter}</p>

        {win && <p className="green"><strong>WINNER</strong></p>}
        {!win && <p className="red">no winner</p>}
        </div>

<div id="turn"></div>
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 402 480"
      overflow="hidden"
    >

<polygon data-thing="banana" id="btn" class="clr1" points="202.8,190.4 295.9,187.9 214.6,289.5 "/>
<polygon id="btn" class="clr1" points="217.1,288.9 297.4,188.5 275.5,283.1 "/>
<polygon id="btn" class="clr1" points="299.8,186.4 315.6,205.3 278,282.8 "/>
<polygon id="btn" class="clr1" points="301.4,184.9 330.7,154.1 317.6,203.4 "/>
<polygon id="btn" class="clr1" points="316.1,122.7 329.2,150.5 305.7,177.3 "/>
<polygon id="btn" class="clr1" points="296.3,104.2 306.4,156.1 315,120.4 "/>
<polygon id="btn" class="clr1" points="310,68.8 297.6,102.2 314.3,116.1 312.8,100.1 "/>
<polygon id="btn" class="clr1" points="337.3,74.6 317.1,96.1 312.2,67.2 "/>
<polygon id="btn" class="clr1" points="331.8,51 315.3,66 336.1,71.5 "/>
<polygon id="btn" class="clr1" points="201.4,190.6 112.8,158.5 183.8,304.6 "/>
<polygon id="btn" class="clr1" points="186.1,304.1 202.3,199.7 212.9,289.4 "/>
<polygon id="btn" class="clr1" points="112.1,160.9 84.6,230.4 132.3,206.8 "/>
<polygon id="btn" class="clr1" points="180.4,305.1 132.8,209.9 86.6,234.4 "/>
<polygon id="btn" class="clr1" points="110.9,160.6 86.2,184.4 81.2,227.7 "/>
<polygon id="btn" class="clr1" points="90.6,242.5 179.6,306.7 128.9,291.4 "/>
<polygon id="btn" class="clr1" points="331.1,158.7 326.5,175.5 321.1,195.4 333.7,179.9 "/>
<polygon id="btn" class="clr1" points="119,159.9 155.9,163.2 197.1,187.4 "/>

<polygon id="btn" class="clr2" points="119,283.3 44.5,183.8 52.9,252 "/>
<polygon id="btn" class="clr2" points="45.1,182.6 59,142.1 84.6,184.7 78.9,224.9 "/>
<polygon id="btn" class="clr2" points="110.4,159.3 83.2,132 62.7,140.6 "/>
<polygon id="btn" class="clr2" points="85.4,181.4 107.1,161.1 63.7,142.9 "/>
<polygon id="btn" class="clr2" points="87.1,133.1 131.9,145.6 148.7,160.7 111.9,157.6 "/>
<polygon id="btn" class="clr2" points="129.4,294 177.2,307 98.7,369.6 "/>
<polygon id="btn" class="clr2" points="118.1,316.4 100.7,342.7 97.5,366.6 "/>
<polygon id="btn" class="clr2" points="97.7,373.9 109.7,419.3 150.1,433.8 150.1,433.8 "/>
<polygon id="btn" class="clr2" points="100.6,372 179.3,309 144.3,367.6 "/>
<polygon id="btn" class="clr2" points="150.7,432.1 160.8,420.3 145,371.4 99.6,374.7 "/>
<polygon id="btn" class="clr2" points="185.3,307 215.5,290.8 274.2,285.8 "/>
<polygon id="btn" class="clr2" points="147,369.4 183.3,309 221.1,302.3 199.8,321.7 "/>
<polygon id="btn" class="clr2" points="243.7,351.3 201.1,326.6 149,373.4 "/>
<polygon id="btn" class="clr2" points="163.7,419.4 150.1,375.7 245.8,353.3 205.9,419 "/>
<polygon id="btn" class="clr2" points="204.7,323.3 227,300.7 274.8,288.6 317.9,341.1 "/>


<polygon id="btn" class="clr3" points="283,368.4 317.5,344.2 266.3,335.8 "/>
<polygon id="btn" class="clr3" points="206.7,325.8 263.8,336.7 279.6,368 250.6,351.2 "/>
<polygon id="btn" class="clr3" points="210.3,417.9 234.5,418.4 279.6,372.8 250,352.8 "/>
<polygon id="btn" class="clr3" points="283.8,377.6 295.9,413.4 269.4,424.6 "/>
<polygon id="btn" class="clr3" points="239.7,419 280.7,374.5 268,421.7 "/>

<g>
<polygon class="clr1" points="204.9,187.5 245.6,179 294.2,185.6 "/>

<polygon class="clr2" points="295.8,101.1 308.3,69.1 298.2,74.8 "/>
<polygon class="clr2" points="299.6,72.5 312,66.4 312.3,58.2 "/>
<polygon class="clr2" points="330.4,49.1 313.5,56.2 313.5,64.8 "/>
<polygon class="clr2" points="333,52.5 338.2,57.6 338.2,74.3 "/>



<polygon class="clr3" points="208.5,420.8 163.6,422.2 154.1,433.2 "/>
<polygon class="clr3" points="289.9,367.2 309.7,362 317.3,346.7 "/>
<polygon class="clr3" points="95,375.5 90.6,386.6 100,396.8 "/>
<path className="clr3" d="M244.6,421.5c-1.6,0.4,9.8,5.8,9.8,5.8l11.7-3.8C266.1,423.5,246.2,421.1,244.6,421.5z"/>
<polygon class="clr3" points="271,426.2 296.4,415.7 288.4,423.3 "/>
<polygon class="clr3" points="246.3,228.9 247.5,219.1 259,218.4 "/>
</g>






    </svg>


        </>
    )
}

export default Simon;