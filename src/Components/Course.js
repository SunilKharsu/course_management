import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from '../api/BootApi';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Button
} from 'reactstrap';


function Course({ course, update }) {
  const deleteCourse = (id) =>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) =>{
        console.log(response);
        toast.success("Course has been deleted",{
          position:"top-right"
        });
        update(course.id);
      },
      (error)=>{
        console.log(error);
        toast.error("Something went wrong",{
          position:"top-right"
        });
      }
    )
  }
  return (
    <div>
      <Card className='text-center'>
        <CardBody>
          <CardTitle className="font-weight-bold">{course.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted ">{course.description}</CardSubtitle>
          <Container className="text-center">
            <Button color="danger" className="me-2" onClick={()=>{
              deleteCourse(course.id);
              
            }}>Delete</Button>
            <Button color="warning">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}

export default Course;