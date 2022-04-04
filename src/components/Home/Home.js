import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';
import './Home.css';
import img from '../../Image/download.jpg';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Home = () => {
    const[reviews,setReviews] = Usereviews();
   
    return (
        <div>
           <Container>
               <Row>
                   <Col md='7' sm='12'>
                       <div className='title-container'>
                            <h2 className='web-title text-warning'>Anwar Furniture design</h2>
                            <h2 className='web-title text-primary'>Your best Choise</h2>

                       </div>
                       <div className='description-container'>
                           <p>Anwar Furniture is the best Furniture in Habiganj.Its quality is very high.This furniture company give you 5 years guaranty. Thats dont give you any furniture company. So if you want to decorate your home . You early come to us</p>
                       </div>
                        <button className='button-design'>Live demo</button>
                   </Col>
                   <Col md='5' sm='12'>
                       <div className='show-container mt-3'>
                           <img className='show-img' src={img} alt="" />
                       </div>
                   </Col>
               </Row>
               <Row>
                 <h2 className='web-title text-primary text-center py-5'>Customer Reviews</h2>
                   <Cart></Cart>
                 
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/review'>See All Reviews</Link>
             </div>
        </div>
    );
};

export default Home;