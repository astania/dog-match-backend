// import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import { LinkContainer } from 'react-router-bootstrap'

// const style = {
//     width: "60%",
//     margin: "5% 0 1%",
//     padding: "1em",
//     textDecoration: "none",
//     color: "black",
//     verticalAlign: "center"
// }
// const activeStyle = {
//     width: "60%",
//     margin: "5% 0 1%",
//     padding: "1em",
//     color: "black",
//     fontWeight: "bold",
//     verticalAlign: "center",
//     textDecoration: "underline",
// };

const NavBar = () => {
    return (
        <div className="mb-3">

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">DogMatch</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/alldogs">Find Playmates</Nav.Link>
                        <Nav.Link as={Link} to="/playdates">Playdate Request Form</Nav.Link>
                        <Nav.Link as={Link} to="/myplaydates">My Playdates</Nav.Link>
                        <Nav.Link as={Link} to="/adddog">Add Dogs</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            {/* <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/" end
            //end is included here to make the home route an exact path. Therefore all other paths will not also have active style
            >Home</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/alldogs"
            >Find Playmates</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/playdates"
            >Playdate Request</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/myplaydates"
            >My Playdates</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/adddog"
            >Add Dogs</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/profile"
            >Profile</NavLink> */}

        </div>
    )
}

export default NavBar;



{/* <Navbar bg="primary" variant="dark">
<Container>
    <Navbar.Brand href="/">DogMatch</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/alldogs">Find Playmates</Nav.Link>
        <Nav.Link href="/playdates">Playdate Request Form</Nav.Link>
        <Nav.Link href="/myplaydates">My Playdates</Nav.Link>
        <Nav.Link href="/adddog">Add Dogs</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
</Container>
</Navbar>  */}