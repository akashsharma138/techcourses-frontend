import React from "react";
import {Card, CardBody} from "reactstrap";

function Header(){
    return(
        <div>
            <Card className="my-2 bg-secondary font-weight-bold">
                <CardBody>
                    <h1 className="text-center ny-2"> Welcome to Tech Courses Application </h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;