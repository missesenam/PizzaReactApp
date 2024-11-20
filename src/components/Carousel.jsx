import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide carouselstyles">
        <div class="carousel-inner carouselheight">
          <div class="carousel-item active">
            <img
              src="src/assets/images/Pizza_1.jpg"
              class="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="src/assets/images/Pizza_2.jpg"
              class="d-block w-100 h-100"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="src/assets/images/Pizza_3.jpg"
              class="d-block w-100 h-100"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="src/assets/images/Pizza_4.jpg"
              class="d-block w-100 h-100"
              alt="Pizza"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
