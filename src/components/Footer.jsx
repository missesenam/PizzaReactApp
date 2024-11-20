import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="card text-center bg-dark text-light mt-5">
          <div class="card-header bg-danger text-white">
            Thank You for Visiting PizzaHaven! 🍕
          </div>
          <div class="card-body">
            <h5 class="card-title">Taste the Difference</h5>
            <p class="card-text">
              At PizzaHaven, we bring people together with the perfect slice.
              Don’t forget to check out our special offers and events!
            </p>
            <a href="#menu" class="btn btn-warning">
              Explore Our Menu
            </a>
          </div>
          <div class="card-footer text-light">
            © 2024 PizzaHaven. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
