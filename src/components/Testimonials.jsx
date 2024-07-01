import React from 'react'
import "../styles/Hero.css"
import star from "../assets/star.svg"
import profile from "../assets/Avatar Image.svg"
import profile1 from "../assets/Avatar Image (1).svg"
import profile2 from "../assets/Avatar Image (2).svg"
const Testimonials = () => {
  return (
    <>
    <main id='testimonial'  className="p-4">
        <section className="container">
            <p className='portfolio'>Clients Feedback</p>
            <h1 className='my-portfolio'>Customer testimonials</h1>
            <div className="d-lg-flex justify-content-between gap-3 mb-5">
                <div className="testicard mb-5">
                    <div className="d-flex gap-2 m-3">
                    <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />
                    </div>
              
                 <p className='m-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                 <div className="d-flex gap-2 ">
                    <img src={profile} alt=""  className='mx-2'/>
                    <div className="mt-4 ">
                       <span className='title'>Dianne Russell</span>
                       <p className='city'>Starbucks</p>
                    </div>
                 </div>


                </div>
                <div className="testicard mb-5 ">
                    <div className="d-flex gap-2 m-3">
                    <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />
                    </div>
              
                 <p className='m-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                 <div className="d-flex gap-2 ">
                    <img src={profile1} alt=""  className='mx-2'/>
                    <div className="mt-4 ">
                       <span className='title'>Kristin Watson</span>
                       <p className='city'>Louis Vuitton</p>
                    </div>
                 </div>


                </div>

          <div className="mb-5 testicard">
                    <div className="d-flex gap-2 m-3">
                    <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />  <img src={star} alt="" style={{width:"20px"}} />
                    </div>
              
                 <p className='m-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                 <div className="d-flex gap-2 ">
                    <img src={profile2} alt=""  className='mx-2'/>
                    <div className="mt-4 ">
                       <span className='title'>Kathryn Murphy</span>
                       <p className='city'>McDonald's</p>
                    </div>
                 </div>


                </div>
            </div>
        </section>
    </main>
    
    </>
  )
}

export default Testimonials
