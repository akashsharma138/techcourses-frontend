import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function Allcourses(){
    useEffect(()=>{
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer =()=> {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("courses has benn loaded", {position:"bottom-center"});
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong", {position:"bottom-center"});
            }
        );
    };

    //calling function
    useEffect(() => {
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses] = useState([]);

    //function to update the view course list after a course is deleted
    const updateCourses =(id)=> {
        setCourses(courses.filter((c) => c.id!=id));
    };

    return(
        <div>
            <h1> All Courses </h1>
            <p> List of Courses are as follows </p>

            {courses.length > 0
                ? courses.map((item) => (<Course key={item.id} course={item} update={updateCourses}/>))
                : "No courses"
            }
        </div>
    );
};

export default Allcourses;