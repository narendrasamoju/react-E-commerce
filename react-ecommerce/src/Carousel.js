import React from 'react'

export default function Carousel() {
  return (
    <div>
       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style={{height:"300px"}} src="https://media.istockphoto.com/id/918381560/photo/eletronic-department-store-with-bokeh-blurred-background.jpg?s=1024x1024&w=is&k=20&c=lSSIVV8wmfAOfJqO4lWivJsfLYCobOrMiU44843N57E=" class="d-block w-100" alt="img1"/>
        </div>
        <div class="carousel-item">
          <img style={{height:"300px"}} src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=612x612&w=0&k=20&c=4iwItEQ1P3lhjl350QXRl5IrgC8ufDImaoc-7_H5vVA=" class="d-block w-100" alt="img2"/>
        </div>
        <div class="carousel-item">
          <img style={{height:"300px"}} src="https://media.istockphoto.com/id/515443264/photo/home-appliance-in-the-store.jpg?s=1024x1024&w=is&k=20&c=FtIyNQbYfR5laasPFFBvZX_9K48QpP8IpHm_lK07ypI=" class="d-block w-100" alt="img3"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}
