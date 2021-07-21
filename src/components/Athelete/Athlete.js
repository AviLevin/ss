import React from 'react';
import classes from './Athlete.module.css';


const Athlete = () => {

return(


  <div className={classes.container}>
    <div id="carouselExampleControls" className="carousel slide"  style={{left:"40%"}} data-ride="carousel">
    <div className="carousel-inner" style={{width:"300px"}}>
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://www.w3schools.com/html/pic_trulli.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://www.w3schools.com/html/workplace.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://www.w3schools.com/html/img_chania.jpg" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
)

}


export default Athlete;