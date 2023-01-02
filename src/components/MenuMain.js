import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";


const MenuMain = () => {
  return (

    <>
  

    <Navbar collapseOnSelect id="reverse" bg="dark" variant="dark" expand="lg" className="px-2">
      <Navbar.Brand as={Link} to="/">
        Melissa <strong>Gerhold</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activekey="/home" className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/welcome">
              Welcome
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/mission">
              COMP<strong>ACT</strong> Mission
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/leadership">
              Leadership
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/campus">
              The Campus
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/history-and-future">
              COMP<strong>ACT</strong> History and Future
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Ministries" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/hillcrest">
              Hillcrest Children's Home
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/highlands">
              Highlands Adoption
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/fostercare">
              Foster Care
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/compacare">
              CompaCare
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/find">
              FIND Kinship navigator
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/safecare">
              SAFECARE
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Get Involved" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/pray">
              Pray
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/give">
              Give
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/serve">
              Serve
            </NavDropdown.Item>
            <NavDropdown.Item href="https://agfostercare.network"
             rel="noopener noreferrer"
             target="_blank">
              AG Foster Care Network
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Resources" id="basic-nav-dropdown">

            {/* <NavDropdown.Item as={Link} to="articles">
              Resource Articles
            </NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/announcements">
              Announcements
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/newsletter">
              Newsletter
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products">
              Products
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partners">
              Partners
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employment">
              Employment
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/contact-us">
            Contact Us
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>



    </Navbar>
    </>
  );
};



export default MenuMain;
