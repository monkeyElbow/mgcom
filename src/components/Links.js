import { Button, Container } from "react-bootstrap"

export default function Links() {
    return (
        <>
        <Container className="text-center py-3">

<Button target="_blank"
              rel="noopener noreferrer" 
              href="https://mediavelocity.com/"
              variant="outline-secondary"
              size="sm"
              >
                  <strong>
                 mediavelocity 
                 </strong></Button>{' '}

<Button target="_blank"
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/melissagerhold/"
              variant="outline-secondary"
              size="sm"
              >
                  <strong>
                 LinkedIn 
                 </strong></Button>{' '}

<Button target="_blank"
              rel="noopener noreferrer" 
              href="https://www.redbubble.com/people/mgerhold/shop"
              variant="outline-secondary"
              size="sm"
              >
                  <strong>
                 Red Bubble 
                 </strong></Button>{' '}

<Button target="_blank"
              rel="noopener noreferrer" 
              href="https://www.saatchiart.com/melissagerhold"
              variant="outline-secondary"
              size="sm"
              >
                  <strong>
                 Saatchi Art 
                 </strong></Button>{' '}

         
                  </Container>
        </>
    )
}
