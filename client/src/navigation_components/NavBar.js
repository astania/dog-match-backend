
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="mb-3">

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">DogMatch</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dogs">Find Playmates</Nav.Link>
                        <Nav.Link as={Link} to="/playdates">Playdate Request Form</Nav.Link>
                        <Nav.Link as={Link} to="/myplaydates">My Playdates</Nav.Link>
                        <Nav.Link as={Link} to="/dogs/new">Add Dogs</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
