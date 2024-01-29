import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Container, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function Addcourse(){
    useEffect(()=>{
        document.title = "Add Courses";
    }, []);

    const [course, setCourses] = useState({});

    //form handler function
    const handleForm =(e)=> {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer =(data)=> {
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response.data);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong");
            }
        );
    };

    return(
        <Fragment>
            <h1 className="text-center"> Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="id"> Course Id</label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      name="id"
                      id="id"
                      onChange={(e)=>{
                        setCourses({...course, id: e.target.value});
                      }}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input
                      type="text"
                      placeholder="Enter title here"
                      id="title"
                      onChange={(e)=>{
                        setCourses({...course, title: e.target.value});
                      }}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <label for="description"> Course Description</label>
                    <Input
                      type="text"
                      placeholder="Enter description here"
                      id="description"
                      style={{height:150}}
                      onChange={(e)=>{
                        setCourses({...course, description: e.target.value});
                      }}
                    ></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button color="success" type="submit"> Add Course </Button>
                    <Button type="react" color="danger" style={{marginLeft:10}}> Clear </Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default Addcourse;