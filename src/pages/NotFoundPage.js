import { Container } from "react-bootstrap"
export default function NotFoundPage() {
  document.title = "Not found";

  return (
    <Container style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center lead">
    
    Could not find that page
    
    
    </Container>
  )
}
