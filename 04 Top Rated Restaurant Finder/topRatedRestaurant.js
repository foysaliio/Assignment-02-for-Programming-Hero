function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }
  let topRestaurant = restaurants[0];
  // console.log(topRestaurant);

  for (const restaurant of restaurants) {
    // console.log(restaurant.rating);
    if (restaurant.rating > topRestaurant.rating) {
      topRestaurant = restaurant;
      // console.log(topRestaurant);
    }
  }
  return topRestaurant.name.toUpperCase();
}

console.log(
  topRatedRestaurant([
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
); //SULTAN'S DINE
console.log(
  topRatedRestaurant([
    { name: "KFC", rating: 4.2 },
    { name: "Pizza Hut", rating: 4.6 },
  ]),
); // PIZZA HUT
console.log(topRatedRestaurant([])); // Invalid
console.log(topRatedRestaurant("restaurants")); // Invalid
