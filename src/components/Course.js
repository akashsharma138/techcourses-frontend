import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course =({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted");
                update(id);
            },
            (error)=>{
                toast.error("Course not deleted !! Server Problem");
            }
        );
    };

    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold"> <b>{course.title}</b> </CardSubtitle>
                <CardText> {course.description} </CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{deleteCourse(course.id);}}> Delete </Button>
                    <Button color="warning" style={{marginLeft:10}}> Update </Button>
                </Container>
            </CardBody>
        </Card>

    )
}

export default Course;