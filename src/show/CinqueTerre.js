import React from 'react'
import { Image, Container } from 'react-bootstrap'

export default function CinqueTerre() {
  return (
    <>
    <Container>

<Image fluid src={require('../img/venice.jpg')} />
    
    <h1>Cinque Terre, Italy</h1>
    <p><b>June 2021</b></p>
    <p>5” x 7.5”</p>
    <p>Watercolor and Ink on Paper</p>
    <h5>Melissa Gerhold</h5>

<h2>$125</h2>
    <p>For purchase during show</p>
    
    {/* <p>Want a print?</p> */}
    </Container>
    </>
  )
}
