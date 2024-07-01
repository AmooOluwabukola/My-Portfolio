import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Proj1 from "../assets/emPic.jpeg"
import Proj2 from "../assets/proj2.svg"
import Proj3 from "../assets/proj3.svg"
import arrow from "../assets/Vector.svg"
import gitHub from "../assets/mdi_github.svg"
import "../styles/Hero.css"

const Portfolio = () => {
  return (
    <>
    <main id='projects'  className="p-4">
        <section className="container">
        <p className='portfolio'>Recent Projects</p>
        <div className='d-flex justify-content-between'>
            <h1 className='my-portfolio'>My Portfolio</h1>
            <a href="#" className='btn  git-btn text-white d-none d-lg-block'><img src={gitHub}alt="" />Visit My GitHub</a>
            <a href="#" className='btn  git-btn text-white d-lg-none py-1'><img src={gitHub}alt="" /> GitHub</a>
        </div>
            <div className="d-lg-flex justify-content-between gap-2 mb-5">
              
            <Card className='w-100 mt-3 shadow-lg'>
    <Card.Img variant="top" src= {Proj1} className=''/>
      <Card.Body>
    <Card.Title className='title'>Ahuse</Card.Title>
        <Card.Text className='portfolio-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </Card.Text>
      
        <a href="#"  className='text-decoration-none text-dark pe-1 cardLink'>Visit website <img src={arrow} alt="" style={{width:"10px"}} /></a> 
      </Card.Body>
    </Card>
    <Card className='w-100 mt-3 shadow-lg'>
      <Card.Img variant="top" src={Proj2} />
      <Card.Body>
        <Card.Title className='title'>App Dashboard</Card.Title>
        <Card.Text className='portfolio-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </Card.Text>
    
        <a href="#"  className='text-decoration-none text-dark pe-1 cardLink'>Visit website <img src={arrow} alt="" style={{width:"10px"}} /></a> 
      </Card.Body>
    </Card>
    <Card className='w-100 mt-3 shadow-lg'>
      <Card.Img variant="top" src={Proj3} />
      <Card.Body>
        <Card.Title className='title'>Easy Rent</Card.Title>
        <Card.Text className='portfolio-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </Card.Text>
       
        <a href="#"  className='text-decoration-none text-dark pe-1 cardLink'>Visit website <img src={arrow} alt="" style={{width:"10px"}} /></a> 
      </Card.Body>
    </Card>
   
            </div>
        </section>
    </main>
      
    </>
  )
}

export default Portfolio
