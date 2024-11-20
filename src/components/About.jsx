import React from "react";

const About = () => {
  return (
    <>
      <h1 className="display-6 text-center mt-4">About PizzaHaven</h1>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="mb-3 border rounded-4"
          style={{ maxWidth: "80%", width: "100%" }}
        >
          <div className="d-flex flex-column flex-md-row gap-3">
            <div className="mb-3 mb-md-0" style={{ maxWidth: "100%", flex: 1 }}>
              <img
                src="src/assets/images/Pizza_1.jpg"
                className="img-fluid rounded-start"
                alt="Pizza Image"
              />
            </div>
            <div
              className="d-flex flex-column justify-content-center"
              style={{ flex: 1 }}
            >
              <div className="card-body">
                <h5 className="display-5 mb-3 card-title text-danger">
                  About PizzaHaven 🍕
                </h5>
                <p className="card-text">
                  At PizzaHaven, we are passionate about crafting the perfect
                  pizza experience. From our freshly made dough to our
                  handpicked toppings, every ingredient is chosen with care to
                  deliver exceptional flavor. Whether you’re a fan of the
                  classic Margherita, crave the boldness of pepperoni, or prefer
                  custom creations, we’ve got something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
