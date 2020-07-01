const products = [];
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  //to save product
  save() {
    products.push(this);
  }

  //to fetch product
  static fetchAll() {
    return products;
  }
};
