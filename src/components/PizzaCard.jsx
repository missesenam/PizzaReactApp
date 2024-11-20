import React from "react";
import Card from "./Card";

const PizzaCard = () => {
  return (
    <>
      <h1 className="display-6 text-center mt-4">About PizzaHaven</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 container-xl mx-auto">
        <Card
          img="src/assets/images/Pizza_1.jpg"
          title="Margherita Pizza"
          description="A classic delight with fresh mozzarella, tomatoes, and basil.
                Simple, flavorful, and timeless!"
        />
        <Card
          img="src/assets/images/Pizza_2.jpg"
          title="Pepperoni Feast"
          description="Loaded with spicy pepperoni and melted cheese, this pizza is a
                bold, savory indulgence."
        />
        <Card
          img="src/assets/images/Pizza_3.jpg"
          title="Veggie Supreme"
          description="Packed with colorful veggies like bell peppers, onions, olives,
                and mushrooms. A vegetarian’s dream!"
        />
        <Card
          img="src/assets/images/Pizza_4.jpg"
          title="BBQ Chicken Delight"
          description="Tender BBQ chicken on a smoky base, topped with onions and
                cheese for an irresistible bite."
        />
      </div>
    </>
  );
};

export default PizzaCard;
