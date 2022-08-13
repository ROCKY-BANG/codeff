import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleImageSlider from "react-simple-image-slider";
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import './style.css';
const images = [
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" },
  { url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
];


function Navigation() {

  var str="sndknsn jdosj doaaskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk";
  return (
    <div>
      <Navbar expand="lg" sticky="top" style={{
        backgroundColor:"#34495e"
      }}>
        <Container>
          <Navbar.Brand href="#home" className="text-light">Invester Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ textDecoration: "none" }}>

              <Link to="/" style={{ textDecoration: "none" ,color:"white" }} className="px-2 mt-2">Home</Link>
              <Link to="/about" style={{ textDecoration: "none",color:"white" }} className="px-2 mt-2" >About</Link>
              <Link to="/contact" style={{ textDecoration: "none",color:"white" }} className="px-2 mt-2">contact</Link>
              <Form className="d-flex ml-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  className="bg-dark"
                />
                <Button variant="outline-light" className="ml-2" size="sm">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>
      {/* <div className="slider">
        <SimpleImageSlider
          width={800}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={1}
          autoPlay={true}
          autoPlayDelay={1}

        />
      </div> */}

      <Carousel className=""  style={{
        innerOverflow:"visible"
      }}>
      <Carousel.Item>
        <img style={{height:"92vh"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"92vh"}}
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>{str}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"92vh"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className=" p-4" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap", backgroundColor:"#34495e"}}>
    <Card style={{ width: '18rem', margin:"12px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {str}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem', margin:"12px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem', margin:"12px"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

      {/* //Fotter */}
      <div class="three-column-footer-contact-form-container">
        <footer class="three-column-footer-contact-form" data-equalizer data-equalize-by-row="true">
          <div class="footer-left" data-equalizer-watch>
            <div class="baseline">
              <div class="contact-details">
                <h5>Contact details</h5>
                <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> 01234 567890</p>
                <p><a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</a></p>
                <p><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> Street, City, County, Country</p>
              </div>
              <div class="newsletter">
                <div class="input-group">
                  <h6>Sign up for our newsletter</h6>
                  <input class="input-group-field" type="email" placeholder="Email address" />
                </div>
                <a class="button expanded" href="#">Submit</a>
              </div>
            </div>
           </div>
          <div class="footer-center" data-equalizer-watch>
            <div class="baseline">
              <div class="newsletter">
                <h5>Contact form</h5>
                <div class="input-group">
                  <input class="input-group-field" type="text" placeholder="Name" />
                  <input class="input-group-field" type="email" placeholder="Email address" />
                  <textarea placeholder="Message"></textarea>
                </div>
                <a class="button expanded" href="#">Submit</a>
              </div>
            </div>
          </div>
          <div class="footer-right" data-equalizer-watch>
            <div class="baseline">
              
              
              <div class="social">
                <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                <i class="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>

  );
}

export default Navigation;