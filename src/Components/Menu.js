import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Menu(){
    return(
        <ListGroup className='mt-2'>
            <Link color="success" className="text-center fw-bold">Menu</Link>
            <Link tag="a" className='list-group-item list-group-item-action' to="/">Home</Link>
            <Link tag="a" className='list-group-item list-group-item-action' to="/add-course">Add Course</Link>
            <Link tag="a" className='list-group-item list-group-item-action' to="/view-courses">View Courses</Link>
            <Link tag="a" className='list-group-item list-group-item-action' to="/add-course">About</Link>
            <Link tag="a" className='list-group-item list-group-item-action' to="/view-courses">Contact</Link>
        </ListGroup>
    )
}

export default Menu;