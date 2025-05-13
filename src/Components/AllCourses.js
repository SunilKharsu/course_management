import React, {use, useEffect, useState} from 'react';
import Course from './Course';
import base_url from '../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

function AllCourses(){
    useEffect(() =>{
        document.title = "All Courses";
    }, []);

    //function to call server
    const getCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses has been loaded",{
                    position:"top-right"
                });
                setCourses(response.data);
                console.log("success");
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong",{
                    position:"top-right"
                });
                console.log("error");
            }
        )
    };

    useEffect(() =>{
        getCoursesFromServer();
    }, []);


    const [courses, setCourses] = useState([
        // {title:"Java Course",desc:"This is detailed course about java"},
        // {title:"Spring Boot Course",desc:"This is detailed course about Spring Boot"},
        // {title:"React Course",desc:"This is detailed course about React"},
        // {title:"Angular Course",desc:"This is detailed course about Angular"},
    ]);

    const updateCourses = (id)=>{
        setCourses(courses.filter((c)=>c.id !== id));
    }
    return (
        <>
            <h1 className="text-center">All Courses</h1>
            <p className="text-center">List of Courses</p>
            {
            courses.length > 0 ?
            courses.map((course,index) => (
                <Course key={index} course={course} update={updateCourses}/>
            )):
            "No Courses"
            }
        </>
    );
}

export default AllCourses;