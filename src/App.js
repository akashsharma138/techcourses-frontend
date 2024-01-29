import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Button, Container, CardImgOverlay } from 'reactstrap';
import Menu from './components/Menu';
import Home from './components/Home';
import Addcourse from './components/Addcourse';
import Allcourses from './components/Allcourses';
import Header from './components/Header';
import { Card, CardImg } from 'reactstrap';

function App() {
  const btnHandle =()=> {
    toast.success("done",{position:"top-center"});
  }
  
  return (
    <div>
      <Card>
        <CardImg
          alt="image unavailable"
          src="https://mcdn.wallpapersafari.com/medium/27/4/Io49Ag.jpg"
         // src='https://as1.ftcdn.net/v2/jpg/06/89/80/38/1000_F_689803866_yiVV2eFhkvWB5HvAqIZW6LeyTDLa6arR.jpg'
          class="card-img-center"
          style={{height: 600, textAlign:"center"}}
        />

       <CardImgOverlay>
         <BrowserRouter>
         <ToastContainer/>
           <Header/>
          <Row>
            <Col md={3}>
              <Menu/>
             </Col>

            <Col md={9}>
              <Routes>
                <Route path="/" Component={Home} exact/>
                <Route path="/add-course" Component={Addcourse} exact/>
                <Route path="/view-courses" Component={Allcourses} exact/>
              </Routes>
            </Col>
          </Row>
         </BrowserRouter>
      </CardImgOverlay>

      </Card>
    </div>
  );
}

export default App;
