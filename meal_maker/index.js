const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],

  },
    get appetizers() {return this._courses.appetizers},
    get mains() { return this._courses.mains},
    get desserts() { return this._courses.desserts},
    set appetizers(setAppetizer) {this._courses.appetizers = setAppetizer},
    set mains(setMains) {this._courses.mains = setMains},
    set desserts(setDesserts) { this._courses.desserts = setDesserts},
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    console.log(dishes);
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = appetizer.price + main.price + dessert.price;
    return `Appetizer: ${appetizer.name}\nMain: ${main.name}\nDessert: ${dessert.name}\nTotal: $${price}`;
  },
};

menu.addDishToCourse("appetizers", "Nachos", 15);
menu.addDishToCourse("appetizers", "Bread Sticks", 7);
menu.addDishToCourse("appetizers", "Cheese on Toast", 4);
menu.addDishToCourse("appetizers", "Garlic Toast", 4);

menu.addDishToCourse("mains", "Hamburger", 17);
menu.addDishToCourse("mains", "Steak", 45);
menu.addDishToCourse("mains", "Grilled Chicken Caesar Salad", 17);
menu.addDishToCourse("mains", "Spaghetti", 23);

menu.addDishToCourse("desserts", "Ice Cream Sundae", 7);
menu.addDishToCourse("desserts", "Cheesecake", 7);
menu.addDishToCourse("desserts", "Tiramasue", 7);

const meal = menu.generateRandomMeal();
console.log(meal);
