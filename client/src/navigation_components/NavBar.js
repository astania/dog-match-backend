import { NavLink } from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    verticalAlign: "center"
}
const activeStyle = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    color: "black",
    fontWeight: "bold",
    verticalAlign: "center",
    textDecoration: "underline",
};

const NavBar = () => {
    return (
        <div>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/" end
                //end is included here to make the home route an exact path. Therefore all other paths will not also have active style
            >Home</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/alldogs" 
            >Dogs</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/profile"
            >Profile</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/adddog"
            >Add Dogs</NavLink>
            <NavLink
                style={({ isActive }) => isActive ? activeStyle : style}
                to="/playdates"
            >PlayDates</NavLink>

        </div>
    )
}

export default NavBar;