import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu=()=> {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action style={{backgroundColor : "skyblue"}}>
              Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action style={{backgroundColor : "skyblue"}}>
              Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action style={{backgroundColor : "skyblue"}}>
              View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action style={{backgroundColor : "skyblue"}}>
              About
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action style={{backgroundColor : "skyblue"}}>
              Contacts
            </Link>
        </ListGroup>
    )
}

export default Menu;