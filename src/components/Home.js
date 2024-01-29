import React, { useEffect } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Container } from "reactstrap";

const Home=()=>{
    useEffect(()=>{
        document.title = "Home";
    }, []);

    return(
        <div className="text-center">
            <Card inverse>
                <CardImg
                   alt="image unavailable"
                   src="https://img.freepik.com/premium-vector/e-learning-technology-concept_46706-901.jpg?w=826"
                   class="card-img-center"
                   style={{height: 450, width: 900, textAlign:"center"}}
                />
                <CardImgOverlay>
                    <CardTitle tag="h1"> Tech Courses </CardTitle>
                    <CardText>
                        This application is developed by Akash Sharma
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default Home;