import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Container, FormGroup } from 'reactstrap';
import base_url from '../api/BootApi';

function AddCourse(){
    useEffect(() =>{
        document.title = "Add Course";
    }, []);

    const[course, setCourses] = useState({id: "", title: "", description: "" }); //state for course object


    //form handler fuction, start when submit button hits
    const formHandler = (e) =>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //create function to post data on server
    // const saveCourse = (course) =>{
    //     fetch('http://localhost:8081/courses',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(course),
    //     }).then(()=>{
    //         console.log("Course has been added");
    //     })
    // }

      const postDatatoServer = (course) =>{
        axios.post(`${base_url}/course`,course).then(
            (response) =>{
                console.log(response);
                console.log("success");
                toast.success("Course has been added",{
                    position:"top-right"
                });
                setCourses({id:" ",title:" ",description:" "});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{
                    position:"top-right"
                })
            }
        )
      }
    return(
        <div>
            <h1 className="text-center my-3">Fill Course details</h1>
           
            <form onSubmit={formHandler}>
                <FormGroup className="form-group">
                    <label for="userId">Course ID</label>
                    <input type="text" className="form-control" placeholder="Enter Course ID" name="userId" id="userId" value={course.id} onChange={(e)=>{
                        setCourses({...course, id:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <label for="title">Course Title</label>
                    <input type="text" className="form-control" placeholder="Enter Course Title" id="title" value={course.title} onChange={(e)=>{
                        setCourses({...course, title:e.target.value})
                    }}/>
                </FormGroup>    

                <FormGroup className="form-group">
                    <label for="decription">Course Description</label>
                    <input type="textarea" className="form-control" placeholder="Enter Course Description" id="description" value={course.description} onChange={(e)=>{
                        setCourses({...course, description:e.target.value})
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type='submit' color="success me-2">Add Course</Button>
                    <Button type='button' color="warning " onClick={()=>{
                        setCourses({id:" ",title:" ",description:" "});
                    }} >Clear</Button>
                </Container>
            </form>
        </div>
    )
}

export default AddCourse; 